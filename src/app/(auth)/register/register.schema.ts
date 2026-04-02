import * as zod from "zod";

export const schema = zod
    .object({
        name: zod.string().nonempty("Name Is Required"),
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
        rePassword: zod.string(),
        phone: zod.string().regex(/^01[0125][0-9]{8}$/, "Must Be Egyptain Number"),
    })
    .refine(
        function ({ password, rePassword }) {
            if (password === rePassword) {
                return true;
            }
            return false;
        },
        { error: "Password and Repassword not same", path: ["rePassword"] },
    );