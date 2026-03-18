//icons 
import { TiThSmallOutline } from "react-icons/ti"
 import { IoFastFoodSharp } from "react-icons/io5";
 import { TbSoup } from "react-icons/tb" 
 import { CiBowlNoodles } from "react-icons/ci" 
 import { MdOutlineFoodBank } from "react-icons/md" 
 import { LuDessert } from "react-icons/lu";
 import { MdEmojiFoodBeverage } from "react-icons/md";


const AllCard = [
{
id:1,
name:"All",
icons:<TiThSmallOutline className="w-15 h-15 text-blue-600"/>
},
{
id:2,
name:"Fast Food",
icons:<IoFastFoodSharp className="w-15 h-15 text-blue-600"/>
},
{
id:3,
name:"Snacks",
icons:<TbSoup className="w-15 h-15 text-blue-600"/>
},
{
id:4,
name:"Italian",
icons:<CiBowlNoodles className="w-15 h-15 text-blue-600"/>
},
{
id:5,
name:"Chinese",
icons:<MdOutlineFoodBank className="w-15 h-15 text-blue-600"/>
},
{
id:6,
name:"Dessert",
icons:<LuDessert className="w-15 h-15 text-blue-600"/>
},
{
id:7,
name:"Beverage",
icons:< MdEmojiFoodBeverage className="w-15 h-15 text-blue-600"/>
}
]

export default AllCard