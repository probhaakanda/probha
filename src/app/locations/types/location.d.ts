import { locationType } from "./locationType";


interface location {
    name : string,
    description? : string,
    link?:string,
    type: locationType,
    parent? : location,
}



























