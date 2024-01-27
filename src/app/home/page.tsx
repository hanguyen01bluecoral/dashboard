"use client";
import * as React from "react"
import { SkeletonDemo } from "../seketlon";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { addDays, format } from "date-fns"
  import { Calendar as CalendarIcon, DonutIcon, DoorClosedIcon, File, FilterX, Mail, Settings, TimerIcon, User, VideoIcon } from "lucide-react"
  import { DateRange } from "react-day-picker"
   
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { Calendar } from "@/components/ui/calendar"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { DatePickerWithRange } from "../date";
 

export default function Dashboard() {
    const [date, setDate] = React.useState<Date>()
    
    return(
        <main>
            <div className="dashboard-card">
                <div className="dashboard_left">
                   <div className="card">
                        <div className="card-content mr-3">
                            <p className="card_header">0</p>
                            <p className="card_title">Active Contact</p>
                        </div>
                        <div className="card-content mr-3">
                            <p className="card_header">0</p>
                            <p className="card_title">Active Contact</p>
                        </div>
                        <div className="card-content">
                            <p className="card_header">0</p>
                            <p className="card_title">Active Contact</p>
                        </div>
                        <div className="card-content mr-3">
                            <p className="card_header">0</p>
                            <p className="card_title">Active Contact</p>
                        </div>
                        <div className="card-content">
                            <p className="card_header">0</p>
                            <p className="card_title">Active Contact</p>
                        </div>
                   </div>

                   <div className="Subscribers">
                        <div className="Subscribers_menu">
                            <div className="select">
                                <Select>
                                    <SelectTrigger className="w-[160px] pt-8 ml-5 outline-none">
                                        <SelectValue placeholder="Select a fruit" />
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
                            <div className="date">
                               <DatePickerWithRange />
                              <div className="ml-4 mr-5">
                                <Button className="bg-[#7757e6] w-[78px] h-[35px] hover:bg-[#9f88f2]">Apply</Button>
                              </div>
                            </div>
                        </div>
                        {/* bieu do */}
                        <div className="chart">
                            <div className="chart_button">
                                <div className="w-[60px] h-[20px] bg-[#7757e6] mr-2">
                                </div>
                                <p >By date</p>
                                <div className="w-[60px] h-[20px] bg-[#7757e6] ml-3 mr-2">
                                </div>
                                <p>Columnrave</p>
                            </div>
                            <div className="chart_item">

                            </div>
                        </div>
                   </div>
                </div>
                <div className="dashboard_right">
                    <div className="getting">
                       <div className="w-full bg-[#f7fafc] text-[#697386] py-[10px] px-[15px] ddget">
                            Getting Started (0 of 5 complete)
                        </div>
                       <div className="list">
                            <div className=" flex items-center py-[10px] px-[15px] dd">
                                <div className="w-[20px] h-[20px] border rounded-full mr-2 dd2"></div>
                                Create a tag
                            </div>
                            <div className=" flex items-center py-[10px] px-[15px] dd">
                                <div className="w-[20px] h-[20px] border rounded-full mr-2 dd2"></div>
                                Import Contact
                            </div>
                            <div className=" flex items-center py-[10px] px-[15px] dd">
                                <div className="w-[20px] h-[20px] border rounded-full mr-2 dd2"></div>
                                Create a Campanis
                            </div>
                            <div className=" flex items-center py-[10px] px-[15px] dd">
                                <div className="w-[20px] h-[20px] border rounded-full mr-2 dd2"></div>
                                Create an Automations
                            </div>
                            <div className=" flex items-center py-[10px] px-[15px] dd">
                                <div className="w-[20px] h-[20px] border rounded-full mr-2 dd2"></div>
                                Create a Form
                            </div>
                        </div>
                        <div className="gioithieu">
                            <div className="w-full gt_head">
                                Do more with WooCommerce + FluentCRM
                            </div>
                            <div className="bg-white px-10 py-5">
                                <p className="text-[13px]">Integrate FluentCRM with WooCommerce and segment your customers by purchase behavior, send super targeted emails, onboarding emails, cross promotions and many more.</p>
                                <Button className="mt-5 bg-[#f56c6c] hover:bg-[#f56c6c]">Upgrade To Pro</Button>
                                <p className="text-[13px] pt-5"><a href="#" className="text-[#2271b1]">Learn more</a> and Supercharge your WooCommerce store by upgrading FluentCRM Pro</p>
                            </div>
                        </div>
                        
                        <div className="quick">
                            <div className="w-full quick_head">
                                Quick List
                            </div>
                            <div className="quick_list bg-white p-3">
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <User className="mr-2 w-[19px] opacity-60"/>
                                    View Contact
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <File className="mr-2 w-[19px] opacity-60"/>
                                    Contact Segments
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <Mail className="mr-2 w-[19px] opacity-60"/>
                                    Email Sequences
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <TimerIcon className="mr-2 w-[19px] opacity-60"/>
                                    Forms
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <FilterX className="mr-2 w-[19px] opacity-60"/>
                                    Automations
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <Settings className="mr-2 w-[19px] opacity-60"/>
                                    Settings
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <DonutIcon className="mr-2 w-[19px] opacity-60"/>
                                    Documentations
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    <VideoIcon className="mr-2 w-[19px] opacity-60"/>
                                    Video Tutorials (Free)
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                                    
                                    FluentSMTP
                                </div>
                                <div className="quick_list-items flex items-center p-3 text-[13px] opacity-80 rounded-sm hover:bg-[#f7f5ff] hover:text-[#9e84f9] cursor-pointer">
                               
                                    SMTP/Mail Settings
                                </div>
                            </div>
                        </div>
                        <div className="gioithieu">
                            <div className="w-full gt_head1 bg-[#f7fafc]">
                            Hi Blue Coral Digital agency in Saigon,
                            </div>
                            <div className="bg-white px-10 py-5">
                                <p className="text-[13px]">Do more with FluentCRM Pro by using more integrations, advanced automations, sequence emails and in-detailed analytics.</p>
                                <Button className="mt-5 bg-[#409eff] hover:bg-[#409eff]">Upgrade To Pro</Button>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    );
}

