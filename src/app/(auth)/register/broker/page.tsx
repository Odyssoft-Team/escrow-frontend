"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { FaRegMap, FaRegUser, FaSuitcase } from "react-icons/fa";
import { HiOutlineHashtag, HiOutlinePhone } from "react-icons/hi2";
import { LuBuilding2 } from "react-icons/lu";
import { PiCity, PiUserCircleFill } from "react-icons/pi";
import { TbLocation } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { toast } from "sonner";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function BrokerRegisterPage() {
  const router = useRouter();

  const [companyName, setCompanyName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [cellPhone, setCellPhone] = useState<string>("");
  const [businessPhone, setBusinessPhone] = useState<string>("");
  const [license, setLicense] = useState<string>("");

  // Estados para errores de validación
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Campos obligatorios
  const requiredFields = {
    companyName: "Company Name",
    firstName: "First Name",
    lastName: "Last Name",
    address1: "Address Line 1",
    city: "City",
    state: "State",
    zip: "ZIP",
    email: "Email",
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm Password",
    businessPhone: "Business Phone",
    license: "License Number",
  };

  // Función para validar email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar contraseña
  const validatePassword = (password: string): string => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      return "Password must contain both uppercase and lowercase letters";
    }
    if (!/(?=.*\d)/.test(password)) {
      return "Password must contain at least one number";
    }
    return "";
  };

  // Función para validar teléfono de EE.UU.
  const isValidUSPhone = (phone: string): boolean => {
    // Eliminar cualquier carácter que no sea dígito
    const digitsOnly = phone.replace(/\D/g, "");

    // Validar que tenga exactamente 10 dígitos
    if (digitsOnly.length !== 10) return false;

    // Validar que el código de área no empiece con 0 o 1
    const areaCode = digitsOnly.substring(0, 3);
    if (areaCode.startsWith("0") || areaCode.startsWith("1")) return false;

    // Validar que el exchange code (primeros 3 dígitos del número local) no empiece con 0 o 1
    const exchangeCode = digitsOnly.substring(3, 6);
    if (exchangeCode.startsWith("0") || exchangeCode.startsWith("1"))
      return false;

    return true;
  };

  // Función para formatear teléfono automáticamente (opcional)
  const formatPhone = (value: string): string => {
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length <= 3) {
      return digitsOnly;
    } else if (digitsOnly.length <= 6) {
      return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
    } else {
      return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
    }
  };

  // Función para validar campos (actualizada)
  const validateField = (name: string, value: string): string => {
    if (requiredFields.hasOwnProperty(name) && !value.trim()) {
      return `${requiredFields[name as keyof typeof requiredFields]} is required`;
    }

    switch (name) {
      case "email":
        if (value && !isValidEmail(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "password":
        const passwordError = validatePassword(value);
        if (passwordError) return passwordError;
        break;
      case "confirmPassword":
        if (value !== password) {
          return "Passwords do not match";
        }
        break;
      case "zip":
        // Código postal de EE.UU. (5 dígitos o 5+4)
        if (value && !/^\d{5}(-\d{4})?$/.test(value)) {
          return "Please enter a valid US ZIP code (e.g., 12345 or 12345-6789)";
        }
        break;
      case "businessPhone":
      case "cellPhone":
        if (value && !isValidUSPhone(value)) {
          return "Please enter a valid US phone number (10 digits)";
        }
        break;
    }

    return "";
  };

  // Manejar cambio de teléfono con formato automático (opcional)
  const handlePhoneChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    const formatted = formatPhone(value);
    setter(formatted);
  };

  // Manejar blur de los campos
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Validar todo el formulario
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    // Validar campos obligatorios
    Object.keys(requiredFields).forEach((field) => {
      const value = eval(field); // Obtener el valor del campo desde el estado
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    // Validar confirmación de contraseña
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);

    // Marcar todos los campos como tocados para mostrar errores
    const allTouched: Record<string, boolean> = {};
    Object.keys(requiredFields).forEach((field) => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    return isValid;
  };

  // Manejar envío del formulario
  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const userData = {
          username: username.toLowerCase(),
          user_email: email,
          password_hash: password,
          user_role: "broker",
          user_first_name: firstName,
          user_last_name: lastName,
          user_phone1: businessPhone,
          user_phone2: cellPhone,
          user_address1: address1,
          user_address2: address2,
          user_city: city,
          user_state: state,
          user_postal_code: zip,
          user_company: companyName,
          user_license: license,
          user_device_id: "",
          user_confirmed: "N",
        };
        const response = await api.post("/users", userData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        toast.success(response.data.message, {
          position: "top-right",
          duration: 5000,
        });

        // Limpiar el formulario
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        setBusinessPhone("");
        setCellPhone("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setState("");
        setZip("");
        setCompanyName("");
        setLicense("");

        // Redirigir a la pantalla de inicio de sesión
        window.open(
          "https://therentsafe.com/reset_password.html",
          "_blank",
          "noopener,noreferrer"
        );
        router.push("/login");
      } catch (error) {
        console.log(error);

        toast.error("Registration failed. Please try again.", {
          position: "top-right",
          duration: 5000,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.warning("Please fill in all required fields.", {
        position: "top-right",
        duration: 5000,
      });
    }
  };

  return (
    <div className="w-full bg-[#F7F8FA] h-full min-h-screen relative pt-12">
      <div className="h-12 w-full flex items-center justify-between bg-white border-b fixed top-0 left-0 right-0 px-4">
        <Link href={"/register"} className="text-primary font-medium text-base">
          Cancel
        </Link>
        <Button
          variant={"ghost"}
          className="text-primary font-medium text-base w-auto px-0"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Save"}
        </Button>
      </div>
      <div className="px-4 pt-8 w-full flex flex-col gap-2 items-center justify-center">
        <FaSuitcase className="size-16 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Broker Registration</h1>
        <p className="text-content text-base text-balance">
          Create your account to get started
        </p>
      </div>

      <div className="w-full grid grid-cols-6 gap-4 px-4 pt-4 pb-8">
        {/* COMPANY NAME */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <LuBuilding2 className="size-4" />
            Company
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="companyName"
            placeholder="Company Name"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.companyName && touched.companyName ? "border-red-500" : ""}`}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.companyName && touched.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* FIRST NAME */}
        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <FaRegUser className="size-4" />
            First Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="firstName"
            placeholder="First Name"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.firstName && touched.firstName ? "border-red-500" : ""}`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* LAST NAME */}
        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <FaRegUser className="size-4" />
            Last Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="lastName"
            placeholder="Last Name"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.lastName && touched.lastName ? "border-red-500" : ""}`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* ADDRESS LINE 1 */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <TbLocation className="size-4" />
            Address Line 1<span className="text-red-500">*</span>
          </Label>
          <Input
            name="address1"
            placeholder="Street address"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.address1 && touched.address1 ? "border-red-500" : ""}`}
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.address1 && touched.address1 && (
            <p className="text-red-500 text-xs mt-1">{errors.address1}</p>
          )}
        </div>

        {/* ADDRESS LINE 2 */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <TbLocation className="size-4" />
            Address Line 2
          </Label>
          <Input
            name="address2"
            placeholder="Apt, Suite, etc."
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>

        {/* CITY */}
        <div className="flex flex-col w-full col-span-2 gap-1">
          <Label className="text-content text-sm font-medium">
            <PiCity className="size-4" />
            City
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="city"
            placeholder="City"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.city && touched.city ? "border-red-500" : ""}`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.city && touched.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        {/* STATE */}
        <div className="flex flex-col w-full col-span-2 gap-1">
          <Label className="text-content text-sm font-medium">
            <FaRegMap className="size-4" />
            State
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="state"
            placeholder="State"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.state && touched.state ? "border-red-500" : ""}`}
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.state && touched.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </div>

        {/* ZIP */}
        <div className="flex flex-col w-full col-span-2 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlineHashtag className="size-4" />
            ZIP
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="zip"
            placeholder="ZIP"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.zip && touched.zip ? "border-red-500" : ""}`}
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.zip && touched.zip && (
            <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlineMail className="size-4" />
            Email
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="email"
            placeholder="Email Address"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.email && touched.email ? "border-red-500" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* USERNAME */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <PiUserCircleFill className="size-4" />
            Username
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="username"
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect="off"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.username && touched.username ? "border-red-500" : ""}`}
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
            onBlur={handleBlur}
          />
          {errors.username && touched.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <FiLock className="size-4" />
            Password
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.password && touched.password ? "border-red-500" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <FiLock className="size-4" />
            Confirm Password
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.confirmPassword && touched.confirmPassword ? "border-red-500" : ""}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* CELL PHONE */}
        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlinePhone className="size-4" />
            Cell Phone
          </Label>
          <Input
            name="cellPhone"
            placeholder="e.g., 555-123-4567"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.cellPhone && touched.cellPhone ? "border-red-500" : ""}`}
            value={cellPhone}
            onChange={(e) => handlePhoneChange(setCellPhone, e.target.value)}
            onBlur={handleBlur}
          />
          {errors.cellPhone && touched.cellPhone && (
            <p className="text-red-500 text-xs mt-1">{errors.cellPhone}</p>
          )}
        </div>

        {/* BUSINESS PHONE */}
        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlinePhone className="size-4" />
            Business Phone
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="businessPhone"
            placeholder="e.g., 555-123-4567"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.businessPhone && touched.businessPhone ? "border-red-500" : ""}`}
            value={businessPhone}
            onChange={(e) =>
              handlePhoneChange(setBusinessPhone, e.target.value)
            }
            onBlur={handleBlur}
          />
          {errors.businessPhone && touched.businessPhone && (
            <p className="text-red-500 text-xs mt-1">{errors.businessPhone}</p>
          )}
        </div>

        {/* LICENSE NUMBER */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <IoDocumentTextOutline className="size-4" />
            Real Estate License No.
            <span className="text-red-500">*</span>
          </Label>
          <Input
            name="license"
            placeholder="License Number"
            className={`h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white ${errors.license && touched.license ? "border-red-500" : ""}`}
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            onBlur={handleBlur}
          />
          {errors.license && touched.license && (
            <p className="text-red-500 text-xs mt-1">{errors.license}</p>
          )}
        </div>
      </div>
    </div>
  );
}
