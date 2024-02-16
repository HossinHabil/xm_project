"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CalendarIcon, CircleDot } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

import { RegisterSchemaStepOne, RegisterSchemaStepTwo } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import PasswordValidation from "./PasswordValidation";

const steps = [
  {
    id: "1",
    name: "Step 1",
    fields: ["fullName", "age"],
  },
  {
    id: "2",
    name: "Step 2",
    fields: ["email", "password"],
  },
];
const RegistationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepOneData, setStepOneData] = useState<z.infer<
    typeof RegisterSchemaStepOne
  > | null>(null);
  const [step1Progress, setStep1Progress] = useState(0);
  const [step2Progress, setStep2Progress] = useState(0);

  const [isCompleted, setIsCompleted] = useState(false);

  const [trackPassword, setTrackPassword] = useState(false);

  const stepOneform = useForm<z.infer<typeof RegisterSchemaStepOne>>({
    resolver: zodResolver(RegisterSchemaStepOne),
    defaultValues: {
      fullName: "",
      age: undefined,
    },
  });
  const stepTwoform = useForm<z.infer<typeof RegisterSchemaStepTwo>>({
    resolver: zodResolver(RegisterSchemaStepTwo),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (currentStep === 0) {
      if (
        !stepOneform.formState.dirtyFields.fullName &&
        !stepOneform.formState.dirtyFields.age
      ) {
        setStep1Progress(0);
      } else {
        setStep1Progress(50);
      }
    }
    if (currentStep === 1) {
      setStep1Progress(100);
      if (
        !stepTwoform.formState.dirtyFields.email &&
        !stepTwoform.formState.dirtyFields.password
      ) {
        setStep2Progress(0);
      } else {
        setStep2Progress(50);
      }
    }
  }, [
    currentStep,
    stepOneform.formState.dirtyFields.fullName,
    stepOneform.formState.dirtyFields.age,
    stepTwoform.formState.dirtyFields.email,
    stepTwoform.formState.dirtyFields.password,
  ]);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
    if (currentStep === steps.length - 1) {
      setStep2Progress(100);
      console.log("Submit");
      return;
    }
  };

  const onSubmitStepOne = (data: z.infer<typeof RegisterSchemaStepOne>) => {
    setStepOneData(data as z.infer<typeof RegisterSchemaStepOne>);
    next();
  };

  const onSubmitStepTwo = (data: z.infer<typeof RegisterSchemaStepTwo>) => {
    if (trackPassword) {
      setStep2Progress(100);
      const collectedData = {
        ...stepOneData,
        ...data,
      };
      setIsCompleted(true);
    }
  };
  return (
    <div className="max-w-[75rem] w-full m-auto space-y-10 px-4">
      {/* Steps */}

      <nav aria-label="Progress">
        <ol
          role="list"
          className="space-y-4 flex flex-col md:flex-row md:space-x-8 md:space-y-0"
        >
          {steps.map((step, index) => (
            <li key={step.name} className={`md:flex-1`}>
              {currentStep > index ? (
                <div className="hidden md:block">
                  <div className="group flex gap-2 w-full items-center py-2 pl-4 transition-colors md:pt-0 md:pl-0 md:pb-4">
                    <div className="rounded-full border-2 border-[#32AA43] p-1 inline-flex justify-center items-center">
                      <span className="text-sm font-medium text-white w-8 h-8 bg-[#32AA43] rounded-full flex justify-center items-center transition-colors">
                        {step.id}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                  <Progress value={100} max={100} className="bg-white h-2" />
                </div>
              ) : currentStep === index ? (
                <div
                  className={`${
                    step2Progress === 0 && index === 2 ? "hidden" : ""
                  }`}
                >
                  <div
                    className="flex items-center w-full gap-2 py-2 pl-4 mb-4 md:mb-0 md:pt-0 md:pl-0 md:pb-4"
                    aria-current="step"
                  >
                    <div className="rounded-full border-2 border-[#32AA43] p-1 inline-flex justify-center items-center">
                      <span className="text-sm font-medium text-white w-8 h-8 bg-[#32AA43] rounded-full flex justify-center items-center">
                        {step.id}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                  <Progress
                    value={currentStep === 0 ? step1Progress : step2Progress}
                    max={100}
                    className="bg-white h-2"
                  />
                </div>
              ) : (
                <div className="hidden md:block">
                  <div className="group flex items-center gap-2 w-full py-2 pl-4 transition-colors md:pt-0 md:pl-0 md:pb-4">
                    <div className="rounded-full border-2 border-[#CCCCCC] p-1 inline-flex justify-center items-center">
                      <span className="text-sm font-medium text-[#201D27] w-8 h-8 bg-[#CCCCCC] rounded-full flex justify-center items-center transition-colors">
                        {step.id}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                  <Progress
                    value={step2Progress}
                    max={100}
                    className="bg-white h-2"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {currentStep === 0 && (
        <Form {...stepOneform}>
          <form
            className="space-y-4 text-center w-full"
            onSubmit={stepOneform.handleSubmit(onSubmitStepOne)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <FormField
                control={stepOneform.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        className="border-teal-400 text-black placeholder:text-gray-500 rounded-none"
                      />
                    </FormControl>
                    {stepOneform.formState.errors.fullName && (
                      <span className="flex items-center gap-x-3">
                        <CircleDot
                          width={15}
                          hanging={15}
                          className="text-[#D51820]"
                        />
                        <FormMessage className="text-left" />
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={stepOneform.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start justify-end">
                    <FormLabel>Date of Birth:</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal text-black w-full rounded-none",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>dd/mm/yy</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-black" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {stepOneform.formState.errors.age && (
                      <span className="flex items-center gap-x-3">
                        <CircleDot
                          width={15}
                          hanging={15}
                          className="text-[#D51820]"
                        />
                        <FormMessage className="text-left" />
                      </span>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={
                !stepOneform.formState.dirtyFields.fullName ||
                !stepOneform.formState.dirtyFields.age
              }
              className="max-w-96 w-full bg-[#29A643] hover:bg-[#29A643] text-[24px] rounded-sm"
            >
              CONTINUE
            </Button>
          </form>
        </Form>
      )}

      {currentStep === 1 && (
        <Form {...stepTwoform}>
          <form
            className="space-y-4 text-center w-full"
            onSubmit={stepTwoform.handleSubmit(onSubmitStepTwo)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <FormField
                control={stepTwoform.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Email"
                        type="email"
                        {...field}
                        className="border-teal-400 text-black placeholder:text-gray-500 rounded-none"
                      />
                    </FormControl>
                    {stepTwoform.formState.errors.email && (
                      <span className="flex items-center gap-x-3">
                        <CircleDot
                          width={15}
                          hanging={15}
                          className="text-[#D51820]"
                        />
                        <FormMessage className="text-left" />
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={stepTwoform.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Password"
                        type="password"
                        {...field}
                        className="border-teal-400 text-black placeholder:text-gray-500 rounded-none"
                      />
                    </FormControl>
                    <PasswordValidation
                      password={field.value}
                      isTouched={stepTwoform.formState.dirtyFields.password}
                      setTrackPassword={setTrackPassword}
                    />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={
                !stepTwoform.formState.dirtyFields.email ||
                !stepTwoform.formState.dirtyFields.password
              }
              className="max-w-96 w-full bg-[#29A643] hover:bg-[#29A643] text-[24px] rounded-sm"
            >
              REGISTER NOW
            </Button>
          </form>
        </Form>
      )}
      {isCompleted && (
        <div className="flex flex-col w-full bg-white p-8 space-y-6 max-w-[54rem] mx-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/images/circle_check.svg"
              alt="check"
              width={50}
              height={50}
            />
            <p className="text-[#3C763D] text-2xl">Registration Successful</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/triangle_icon.svg"
              alt="check"
              width={5}
              height={5}
            />
            <p className="text-[#3C763D] text-sm">
              Thank you for registering for our event with XM. You will receive
              an email shortly with confirmation of your registration.
            </p>
          </div>
        </div>
      )}

      <div>
        <p>
          Don’t have an account?{" "}
          <Link href="/" className="underline text-[#D51820]">
            Create one here
          </Link>{" "}
          and register for the event
        </p>
        <p>
          Terms and Conditions apply<span className="text-[#D51820]">*</span>.
          To read the full T&Cs, click{" "}
          <Link href="/" className="text-[#D51820]">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default RegistationForm;
