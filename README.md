This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## packages to be installed
```
"dependencies": {
"@emotion/react": "^11.14.0",
"@emotion/styled": "^11.14.0",
"@mui/icons-material": "^6.2.1",
"@mui/material": "^6.2.1",
"@types/axios": "^0.14.4",
"@types/next-auth": "^3.13.0",
"axios": "^1.7.9",
"next": "14.2.1",
"next-auth": "^4.24.11",
"react": "^18",
"react-dom": "^18",
"react-hook-form": "^7.54.1",
"react-icons": "^5.4.0",
"uuid": "^11.0.3"
},
```
## tsconfig.json
 
```
{
"compilerOptions": {
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"strict": true,
"noEmit": true,
"esModuleInterop": true,
"module": "esnext",
"moduleResolution": "bundler",
"resolveJsonModule": true,
"isolatedModules": true,
"jsx": "preserve",
"incremental": true,
"plugins": [
{
"name": "next"
}
],
"paths": {
"@/_": ["./_"]
}
},
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
"exclude": ["node_modules"]
}
```
## tailwind.config.ts

```
import type { Config } from "tailwindcss";

const config: Config = {
content: [
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
backgroundImage: {
"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
"gradient-conic":
"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
},
colors: {
primary: {
DEFAULT: "#00222C",
},
accent: {
light: "#7BC8EC",
DEFAULT: "#43B1E4",
dark: "#368EB6",
darker: "#1B475B",
},
error: {
DEFAULT: "#D00000",
},
success: {
DEFAULT: "#38B000",
},
customGray: {
light: "#e5e7eb",
DEFAULT: "#808080",
},
},
},
},
plugins: [],
};
export default config;
```

## folder structre

main folders :
app
components
lib
public

## lib folder has axios file axiosInstance

## axiosInstance.tsx
``` 
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};

    // Add Authorization header
    let token;
    if (typeof window === "undefined") {
      // SSR: Use Next.js cookies()
      token = cookies().get("token")?.value;
    } else {
      // CSR: Cookies are automatically attached by the browser
      // If you need to access a token stored in a non-HttpOnly cookie manually:
      token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Check if the request is for multipart/form-data
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => {
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default axiosInstance;
```

## app folder contains structure of routing

## group router (with-layout)
## login ( default router )
## global files ( layout , error , loading , not-found , unauthorized)

## layout.tsx in app file
```
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "I Learna Platform",
  description: "I Learna Platform",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.className}`}>{children}</body>
    </html>
  );
}
```

## loading.tsx in app file

``` 
"use client";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-accent-light border-solid mb-6"></div>
        <p className="text-lg text-customGray">Loading, please wait...</p>
      </div>
    </div>
  );
}
```
## not-found.tsx in app file
``` 
"use client";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-customGray mb-4">404</h1>
        <p className="text-lg text-customGray mb-6">
          Page not found. The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
```
## unauthorized.tsx in app file

```
"use client";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-error mb-4">401</h1>
        <p className="text-lg text-customGray mb-6">
          Unauthorized. You do not have access to this page.
        </p>
        <a
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
```

## app folder structure

## app folder has the following :

## group route (with-layout) and normal route login

## (with-layout) has group route home and layout.tsx

## layout.tsx

```
import { ReactNode } from "react";

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <p>main header</p>
      {children}
      <p>main footer</p>
    </div>
  );
}
```

## (home) has page.tsx

## page.tsx
```
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>I leanre platform home page</h1>
    </main>
  );
}
```
## login route has page.tsx
``` 
"use client";

import AuthImage from "@/components/routes/login/AuthImage";
import LoginFooter from "@/components/routes/login/LoginFooter";
import LoginHeader from "@/components/routes/login/LoginHeader";
import { useState } from "react";

const LoginPage = () => {
  return (
    <div className="flex space-x-5 p-3 h-screen">
      <div className="w-full px-2 py-3 md:w-[70%] md:mx-auto lg:w-1/2 lg:px-28 lg:py-3 flex flex-col">
        <LoginHeader />
        <h1>Authentication Form</h1>
        <LoginFooter />
      </div>

      <div className="hidden lg:block w-1/2 h-full">
        <AuthImage />
      </div>
    </div>
  );
};

export default LoginPage;
```
## components folder structure

## components folder contains the following folder ( layout , routes , ui )

## layout folder contains Language.tsx

## Language.tsx

``` 
"use client";
import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { Menu, MenuItem, Button } from "@mui/material";

const Language = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const open = Boolean(anchorEl);

  const languages = ["English (US)", "العربية"];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language?: string) => {
    if (language) {
      setSelectedLanguage(language);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Button that opens the dropdown */}
      <button
        onClick={handleClick}
        className="flex items-center space-x-1 text-inherit"
      >
        <TbWorld className="w-5 h-5 shrink-0" />
        <p>{selectedLanguage}</p>
      </button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "language-selector",
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language}
            onClick={() => handleClose(language)}
            selected={language === selectedLanguage}
          >
            {language}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Language;
```

## routes folder

## routes folder contains login folder

## login folder contains the following files ( AuthImage , LoginFooter , LoginHeader )

## AuthImage.tsx
```
import Image from "next/image";
import React from "react";

const AuthImage = () => {
  return (
    <div className="h-full w-[90%] m-auto relative rounded-2xl overflow-hidden">
      <Image src="/images/auth-pic.webp" fill alt="login image" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute bottom-5 p-5 m-8 text-2xl text-justify font-semibold text-white">
        <p>
          Empowering professionals and learners with a seamless platform to gain
          knowledge, connect with experts, and fuel their career growth!
        </p>
      </div>
    </div>
  );
};

export default AuthImage;
```

## LoginFooter.tsx
```
import Link from "next/link";
import React from "react";

const LoginFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-sm mt-auto text-customGray">
      <p>@2025 ilearna, All rights reserved</p>

      <div className="flex space-x-3 items-center">
        <Link href="#">Privacy Policy</Link>
        <span className="text-xl">|</span>
        <Link href="#">Terms of Service</Link>
      </div>
    </div>
  );
};

export default LoginFooter;
```

## LoginHeader.tsx
```
import Language from "@/components/layout/Language";
import Image from "next/image";
import React from "react";

const LoginHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Image
        src="/images/brand/icon-logo.png"
        width={1500}
        height={1500}
        alt="Icon Logo"
        className="w-12 h-12 shrink-0"
      />
      <Language />
    </div>
  );
};

export default LoginHeader;
```

## ui folder

## ui folder has the following files ( inputEmail , inputError , inputFile , inputLabel, inputPassword , inputText , inputTextArea )

## inputEmail.tsx

```
"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: object;
}

const InputEmail: FC<IProps> = (props) => {
  // Access the form context to register this input and get the values and errors.
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name];

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <input
        id={props.name}
        type="email"
        placeholder={props.placeholder}
        className="w-full text-sm py-2 px-2 pr-8 border rounded-md focus:outline-none focus:ring-1 font-normal border-accent-light"
        {...register(props.name, { ...props.rules })}
      />

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputEmail;
```

## inputError.tsx
```
import React, { FC } from "react";

const InputError: FC<{ error: string | undefined }> = ({ error }) => {
  if (!error) return null;
  return <p className="text-error text-sm mt-1">{error}</p>;
};

export default InputError;
```

## InputFile.tsx
```
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: object;
}

const InputFile: FC<IProps> = (props) => {
  const { register, formState, setValue } = useFormContext();
  const error = formState.errors[props.name];

  // State to hold the file name
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // Set the file name to the state
      setValue(props.name, file); // Set the file in the React Hook Form state
    } else {
      setFileName(null); // If no file is selected, reset the file name
      setValue(props.name, null); // Remove the file from the React Hook Form state
    }
  };

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <div className="relative border border-accent-light rounded-md p-2 cursor-pointer">
        <input
          type="file"
          accept=".pdf, .doc, .docx, .RTF"
          className="w-full opacity-0 absolute inset-0 cursor-pointer"
          {...register(props.name, { ...props.rules })}
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-center text-accent cursor-pointer">
          <FiUpload className="mr-2" />
          <span>{fileName || "Upload File"}</span>
        </div>
      </div>

      <p className="text-xs mt-1 text-customGray">
        Supported formats include PDF, DOC, DOCX, or RTF (max 20MB).
      </p>

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputFile;
```

## InputLabel.tsx

```
import React, { FC } from "react";

const InputLabel: FC<{ name: string; label: string }> = (props) => {
  return (
    <label
      htmlFor={props.name}
      className="block text-sm font-semibold text-customGray mb-1"
    >
      {props.label}
    </label>
  );
};

export default InputLabel;
```

## InputPassword.tsx

```
"use client";
import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  rules?: object;
  isNewPassword?: boolean;
  confirmField?: string;
}

const InputPassword: React.FC<InputProps> = (props) => {
  // Access the form context to register this input and get the values and errors.
  const { register, formState, watch } = useFormContext();
  const error = formState.errors[props.name];

  // Get the entered password using the form state.
  const enteredPassword = watch(props.name);

  // Check if this field being used as a confirmation password input
  const passwordToConfirm = watch(props.confirmField || "");
  const isMatchingPasswords =
    passwordToConfirm && passwordToConfirm === enteredPassword;

  // State to toggle showing or hiding the password plain text.
  const [isPlainText, setIsPlainText] = useState(false);

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <div className="relative">
        <input
          id={props.name}
          type={isPlainText ? "text" : "password"}
          placeholder={props.placeholder}
          className="w-full py-2 px-2 text-sm font-normal pr-8 border rounded-md focus:outline-none border-accent-light focus:ring-blue-500"
          {...register(props.name, { ...props.rules })}
        />

        <TogglePass
          isPlainText={isPlainText}
          onClick={() => setIsPlainText((prev) => !prev)}
        />
      </div>

      <InputError error={error?.message?.toString()} />

      {/* Password Rules */}
      {props.isNewPassword && <PasswordRules password={enteredPassword} />}

      {/* Confirm Password Validation */}
      {props.confirmField && <ConfirmRules isConfirmed={isMatchingPasswords} />}
    </div>
  );
};

const TogglePass: FC<{ onClick: () => void; isPlainText: boolean }> = (
  props
) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-customGray"
    >
      {props.isPlainText ? <LuEyeClosed /> : <FiEye />}
    </button>
  );
};

const PasswordRules: React.FC<{ password: string }> = ({ password }) => {
  const rules = [
    { text: "Minimum 8 characters", isValid: password?.length >= 8 },
    {
      text: "At least one uppercase letter (A-Z)",
      isValid: /[A-Z]/.test(password),
    },
    { text: "Contains a number or symbol", isValid: /[\d\W]/.test(password) },
  ];

  return (
    <ul className="text-customGray text-sm mt-1 space-y-1">
      {rules.map((rule, index) => (
        <li
          key={index}
          className={`font-normal ${rule.isValid ? "text-success" : ""}`}
        >
          ✓ {rule.text}
        </li>
      ))}
    </ul>
  );
};

const ConfirmRules: FC<{ isConfirmed: boolean }> = (props) => {
  return (
    <p
      className={`font-normal text-sm mt-1 text-customGray ${
        props.isConfirmed ? "text-success" : ""
      }`}
    >
      ✓ Passwords match
    </p>
  );
};

export default InputPassword;
```

## InputText.tsx

```
"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  rules?: object;
}

const InputText: FC<IProps> = (props) => {
  // Access the form context to register this input and get the values and errors.
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name];

  return (
    <div>
      <InputLabel label={props.label} name={props.name} />

      <input
        id={props.name}
        type="text"
        placeholder={props.placeholder}
        className="w-full text-sm py-2 px-2 pr-8 border rounded-md focus:outline-none focus:ring-1 font-normal border-accent-light"
        {...register(props.name, { ...props.rules })}
      />

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputText;
```

## InputTextArea.tsx

```
"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

interface IProps {
  name: string;
  placeholder?: string;
  rules?: object;
}

const InputTextArea: FC<IProps> = (props) => {
  // Access the form context to register this input and get the values and errors.
  const { register, formState } = useFormContext();
  const error = formState.errors[props.name];

  return (
    <div>
      <textarea
        id={props.name}
        placeholder={props.placeholder}
        rows={4}
        className="w-full text-sm py-2 px-2 pr-8 border rounded-md focus:outline-none focus:ring-1 font-normal border-accent-light"
        {...register(props.name, { ...props.rules })}
      />

      <InputError error={error?.message?.toString()} />
    </div>
  );
};

export default InputTextArea;
```