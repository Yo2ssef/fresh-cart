import * as zod from "zod";

export const schemaCashOrder = zod.object({
    details: zod
        .string()
        .min(1, "Details are Required"),

    phone: zod
        .string()
        .min(1, "Phone Number Is Required")
        .regex(/^01[0125][0-9]{8}$/, "Must Be Egyptian Number"),

    city: zod
        .string()
        .min(1, "City Is Required"),

    postalCode: zod
        .string()
        .length(5, "Postal Code Must Be 5 Digits")
        .regex(/^\d+$/, "Postal Code Must Be Numbers Only"),
});