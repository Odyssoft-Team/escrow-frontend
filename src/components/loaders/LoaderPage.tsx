export default function LoaderPage() {
  return (
    <div className="container h-full flex flex-col items-center justify-center gap-2">
      <span className="loader"></span>
      <span className="text-base font-medium text-primary">
        Loading information...
      </span>
    </div>
  );
}
