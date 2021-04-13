import { Header } from "semantic-ui-react"
import Gnb from "./Gnb"

export default function Top() {
    return (
    <div>
        <div style={{ display: "flex"}}>
            <div style={{flex:'100px 0 0'}}>
                <img 
                        src="/images/lemon_.png" 
                        alt="logo"
                        style={{ display:"block", width: 80}}
                    />
            </div>
            <Header as="h1">next.js 연습</Header>
            </div>
            <Gnb />
            
    </div>
    )
}