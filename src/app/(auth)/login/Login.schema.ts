import * as zod from "zod";

export const schemaLogin = zod
    .object({
        email: zod
            .string()
            .regex(
                /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                "Enter Vaild Email",
            )
            .nonempty("Email Is Required"),
        password: zod
            .string()
            .regex(
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                "Enter Vaild Password",
            ),
    })