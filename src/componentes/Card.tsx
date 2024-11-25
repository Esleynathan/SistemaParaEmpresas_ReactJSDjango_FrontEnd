import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Card = ({ children }: Props) => {
    return (
        <div style={{border: '1px solid red', width: "100vw", height: "100vh"}}>
            {children}
        </div>
    )

}