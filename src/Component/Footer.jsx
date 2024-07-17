import React from "react";

export default function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const currentYear = 2023;
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex items-center justify-center py-6 border-t-2 border-neutral-200">
      <small>
        &#169;{currentYear < year ? `${currentYear}-` : ""}
        {year}
      </small>
    </footer>
  );
}
