import { z } from "zod";

const currentDate = new Date();

export const RegisterSchemaStepOne = z.object({
    fullName: z.string().min(2).max(15).regex(/^[a-zA-Z]+ [a-zA-Z]+$/, "Please enter a valid name"),
    age: z.date()
        .refine(date => {
            const age = currentDate.getFullYear() - date.getFullYear();
            return age >= 18;
        }, {
            message: "Minimum age requirements, 18 years old"
        })
        .refine(date => {
            const age = currentDate.getFullYear() - date.getFullYear();
            return age <= 60;
        }, {
            message: "Maximum age requirements, 60 years old"
        }),
});

export const RegisterSchemaStepTwo = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(8).max(20),
});