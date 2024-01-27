import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function Contact() {
    return (
        <main>
            <div className="w-full h-[120px] md:h-[56px] border-b bg-white">
               <div className="menu-contact">
                    <div className="select">
                        <Select>
                            <SelectTrigger className="w-[160px] pt-6  outline-none">
                                <SelectValue placeholder="Contacts" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-0 md:mt-[8px] ml-[5px] mr-0 md:mr-[20px]">
                        <Button className="w-[120px] h-[32px] rounded-none mr-[1px] bg-[#409eff] hover:bg-[#409eff]"> Add Contact</Button>
                        <Button className="w-[120px] h-[32px] rounded-none mr-[1px] bg-[#909399] hover:bg-[#909399]">Import</Button>
                        <Button className="w-[120px] h-[32px] rounded-none mr-[1px] bg-[#909399] hover:bg-[#909399]">Export</Button>
                    </div>
               </div>

               <div className="contact_fiter border-b h-[56px] bg-white border-t mt-[15px] flex justify-between">
                    <div className="fiter-left flex">
                        <Select>
                        <SelectTrigger className="w-[170px] border mt-[8px] ml-[30px] rounded-sm">
                            <SelectValue placeholder="Select a fruit"  className="text-[10px] placeholder:text-[10px]"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>

                        <Select>
                        <SelectTrigger className="w-[170px] border mt-[8px] ml-[30px] rounded-sm">
                            <SelectValue placeholder="Select a fruit"  className="text-[10px] placeholder:text-[10px]"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>

                        <Select>
                        <SelectTrigger className="w-[170px] border mt-[8px] ml-[30px] rounded-sm">
                            <SelectValue placeholder="Select a fruit"  className="text-[10px] placeholder:text-[10px]"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>

                    <div className="filter_right flex">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Advanced Filter</Label>
                    </div>
                    </div>
               </div>
            </div>
        </main>
    );
}