import { FaPhoneAlt } from "react-icons/fa";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  AlertCircle,
  AlertTriangle,
  Building2,
  ChevronRight,
  Clock,
  Info,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Card } from "../ui/card";

const items = [
  {
    icon: <Mail className="h-6 w-6 text-blue-500" />,
    title: "Email Support",
    subtitle: "support@test.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-green-500" />,
    title: "Phone Support",
    subtitle: "+1 (555) 123-4567",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-purple-500" />,
    title: "Live Chat",
    subtitle: "Available 24/7",
  },
];

const items_contact = [
  {
    icon: <Building2 className="h-5 w-5 text-blue-600" />,
    title: "Headquarters",
    description: "123 Tech Street\nSan Francisco, CA 94102",
  },
  {
    icon: <Clock className="h-5 w-5 text-blue-600" />,
    title: "Customer Service Hours",
    description:
      "Monday – Friday: 9:00 AM – 6:00 PM PST\nWeekends: 10:00 AM – 4:00 PM PST",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-blue-600" />,
    title: "Emergency Support",
    description: "Available 24/7 for urgent issues",
  },
];

const hours = [
  { day: "Monday - Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

export default function ContactsData() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">
          Contact Us
        </h1>
        <div className="w-full flex items-center justify-center gap-1 font-medium text-primary/70 text-sm relative">
          <Avatar className="bg-primary text-white size-20 overflow-visible shadow-[0px_0px_35px_5px_rgba(37,51,131,0.50)]">
            <AvatarFallback className="size-full bg-primary text-white font-bold text-3xl uppercase">
              <FaPhoneAlt />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-center gap-1 font-medium text-primary/70 text-sm my-6">
          <span className="text-primary px-4 py-1 rounded-full  font-bold text-2xl leading-[1] capitalize">
            Get in Touch
          </span>
          <span className="text-content font-normal text-base text-center px-4 py-1 rounded-full leading-[1]">
            We are here to help you with any questions or concerns.
          </span>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto space-y-3">
        {items.map((item, i) => (
          <Card
            key={i}
            className="flex flex-row items-center justify-between p-4 shadow-sm rounded-xl hover:bg-accent transition"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xs text-muted-foreground">
                  {item.subtitle}
                </span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Card>
        ))}
      </div>

      <Card className="w-full max-w-md mx-auto p-5 rounded-2xl shadow-sm space-y-2 gap-3">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <h2 className="text-base font-semibold text-primary">
            Contact Information
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {items_contact.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="pt-1">{item.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-primary">
                  {item.title}
                </span>
                <span className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="w-full max-w-md mx-auto p-5 rounded-2xl shadow-sm gap-2">
        {/* Header */}
        <div className="flex items-center gap-2 text-orange-500">
          <Clock className="h-5 w-5" />
          <h2 className="text-base font-semibold">Office Hours</h2>
        </div>

        {/* Hours List */}
        <div className="divide-y divide-border">
          {hours.map((item, idx) => (
            <div key={idx} className="flex justify-between py-2 text-sm">
              <span className="font-medium text-primary">{item.day}</span>
              <span className="text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>

        {/* Emergency Support */}
        <div className="flex items-center justify-center text-center gap-2 pt-2  text-sm">
          <AlertCircle className="h-4 w-4 text-orange-500" />
          <span className="text-content">Emergency support available 24/7</span>
        </div>
      </Card>
    </>
  );
}
