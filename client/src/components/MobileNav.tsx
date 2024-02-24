import { Menu} from "lucide-react"
import { SheetTrigger,Sheet, SheetContent, SheetTitle, SheetDescription } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const MobileNav = () =>{
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-red-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to HUFD</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                         <Button className="flex-1 font-bold bg-red-500">Login</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNav