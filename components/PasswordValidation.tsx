"use client";

import { useEffect, useState } from "react";
import { CircleDot } from "lucide-react";

type PasswordRule = {
  id: string;
  message: string;
  test: (password: string) => boolean;
};

const passwordRules: PasswordRule[] = [
  {
    id: "length",
    message: "8 - 15 characters",
    test: (password) => password.length >= 8 && password.length <= 20,
  },
  {
    id: "lowercase",
    message: "1 or more lower case letters",
    test: (password) => /[a-z]/.test(password),
  },
  {
    id: "uppercase",
    message: "1 or more upper case letters",
    test: (password) => /[A-Z]/.test(password),
  },
  {
    id: "number",
    message: "1 or more numbers",
    test: (password) => /\d/.test(password),
  },
  {
    id: "special",
    message: "1 or more special characters (#[]()@$&*!?|,.^/\+_-)",
    test: (password) => /[*@!#%&()^~{}]/.test(password),
  },
];

type PasswordValidationProps = {
  password: string;
  isTouched: boolean | undefined;
};

const PasswordValidation: React.FC<PasswordValidationProps> = ({
  password,
  isTouched,
}) => {
  const [validationStatus, setValidationStatus] = useState<
    Record<string, boolean>
  >({});
  useEffect(() => {
    const newValidationStatus: Record<string, boolean> = {};
    for (const rule of passwordRules) {
      newValidationStatus[rule.id] = rule.test(password);
    }
    setValidationStatus(newValidationStatus);
  }, [password]);
  return (
    <ul className="!mt-6">
      {passwordRules.map((rule) => (
        <li
          key={rule.id}
          style={{
            color: isTouched
              ? validationStatus[rule.id]
                ? "#29A643"
                : "#D51820"
              : "#959595",
          }}
          className="mb-[6px]"
        >
          <span className="flex items-center gap-x-4 lg:gap-x-6">
            <div className="min-w-4 min-h-4"><CircleDot /></div>
            {rule.message}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PasswordValidation;
