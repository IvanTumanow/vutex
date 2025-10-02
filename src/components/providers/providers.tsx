'use client'

import {SessionProvider} from "next-auth/react";
import type {ReactNode} from "react";


function Providers({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default Providers