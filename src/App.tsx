import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function AccordionDemo() {
  return (
    <>
      <div className=" w-full bg-gray-100 flex min-h-[100vh]">
        <div className=" container flex flex-col m-auto sm:w-96 min-h-[100vh] sm:min-h-[90vh] align-middle  bg-white shadow-xl p-4">
          {/* Topbar  */}
          <section className="fixed flex w-96  -ml-3 px-4 justify-between bg-white">
            <h1 className="font-semibold font-sans text-lg my-auto">
              Task Details
            </h1>
            <div className="flex  gap-2">
              <Badge
                variant="outline"
                className="w-16 text-center m-auto text-xs py-1 text-red-600"
              >
                3982
              </Badge>{" "}
              <Badge
                variant="outline"
                className="w-16 text-center m-auto text-xs py-1 bg-green-100 text-green-700 font-normal"
              >
                ₹2875.00
              </Badge>{" "}
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>img</AvatarFallback>
              </Avatar>
            </div>
          </section>
          


          <section className="pt-16 flex flex-col gap-3">
            <Accordion
              type="single"
              collapsible
              className="w-full gap-2 flex flex-col"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex gap-3 px-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Monthly Leaderboard Winner
                </AccordionTrigger>
                <AccordionContent className="w-full border  border-gray-300 border-t-0 rounded-sm">
                  <Tabs defaultValue="Details" className=" w-full">
                    <TabsList>
                      <TabsTrigger value="Details" className="w-full">
                        Details
                      </TabsTrigger>
                      <TabsTrigger value="Earnings" className="w-full">
                        Earnings
                      </TabsTrigger>
                      <TabsTrigger value="Disclaimer" className="w-full">
                        Disclaimer
                      </TabsTrigger>
                    </TabsList>
                    <div className="   ">
                      <TabsContent value="Details">
                        <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Description:</h1>
                            <ol className="list-decimal ml-3">
                              <li>Like this Instagram Post. </li>
                              <li>
                                Take a Screenshort showing you've liked the
                                post.
                              </li>
                              <li>
                                Submit the Screenshort in the app to claim your
                                reward!
                              </li>
                            </ol>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Task Link:</h1>
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Start Task
                            </Button>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Points: </h1>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              10
                            </Button>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Share:</h1>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              Share
                            </Button>
                          </div>
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Earnings">
                      <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <ol className="list-decimal ml-3">
                              <li>You will get 10 points on submission of proof of task in form of screenshot. </li>
                              <li>
                              You will earn your points on successfully verification of your task by the task creator.
                              </li>
                              <li>
                              Task verification may take 24-48 hours.
                              </li>
                            </ol>
                          </div>
                          
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Disclaimer">
                      <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <ol className="list-decimal ml-3">
                              <li>Any fraud activity may result in blocking of your account. </li>
                              <li>
                              You must not unfollow/unlike/undo your action atleast for 30 days after submission as this may lead to account suspension.
                              </li>
                              
                            </ol>
                          </div>
                          
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full gap-2 flex flex-col"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex gap-3 px-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Weekly Leaderboard Winner
                </AccordionTrigger>
                <AccordionContent className="w-full border  border-gray-300 border-t-0 rounded-sm">
                  <Tabs defaultValue="Details" className=" w-full">
                    <TabsList>
                      <TabsTrigger value="Details" className="w-full">
                        Details
                      </TabsTrigger>
                      <TabsTrigger value="Earnings" className="w-full">
                        Earnings
                      </TabsTrigger>
                      <TabsTrigger value="Disclaimer" className="w-full">
                        Disclaimer
                      </TabsTrigger>
                    </TabsList>
                    <div className="   ">
                      <TabsContent value="Details">
                        <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Description:</h1>
                            <ol className="list-decimal ml-3">
                              <li>Like this Instagram Post. </li>
                              <li>
                                Take a Screenshort showing you've liked the
                                post.
                              </li>
                              <li>
                                Submit the Screenshort in the app to claim your
                                reward!
                              </li>
                            </ol>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Task Link:</h1>
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Start Task
                            </Button>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Points: </h1>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              10
                            </Button>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Share:</h1>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              Share
                            </Button>
                          </div>
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Earnings">
                      <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <ol className="list-decimal ml-3">
                              <li>You will get 10 points on submission of proof of task in form of screenshot. </li>
                              <li>
                              You will earn your points on successfully verification of your task by the task creator.
                              </li>
                              <li>
                              Task verification may take 24-48 hours.
                              </li>
                            </ol>
                          </div>
                          
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Disclaimer">
                      <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <ol className="list-decimal ml-3">
                              <li>Any fraud activity may result in blocking of your account. </li>
                              <li>
                              You must not unfollow/unlike/undo your action atleast for 30 days after submission as this may lead to account suspension.
                              </li>
                              
                            </ol>
                          </div>
                          
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full gap-2 flex flex-col"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex gap-3 px-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Daily Leaderboard Winner
                </AccordionTrigger>
                <AccordionContent className="w-full border  border-gray-300 border-t-0 rounded-sm">
                  <Tabs defaultValue="Details" className=" w-full">
                    <TabsList>
                      <TabsTrigger value="Details" className="w-full">
                        Details
                      </TabsTrigger>
                      <TabsTrigger value="Earnings" className="w-full">
                        Earnings
                      </TabsTrigger>
                      <TabsTrigger value="Disclaimer" className="w-full">
                        Disclaimer
                      </TabsTrigger>
                    </TabsList>
                    <div className="   ">
                      <TabsContent value="Details">
                        <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Description:</h1>
                            <ol className="list-decimal ml-3">
                              <li>Like this Instagram Post. </li>
                              <li>
                                Take a Screenshort showing you've liked the
                                post.
                              </li>
                              <li>
                                Submit the Screenshort in the app to claim your
                                reward!
                              </li>
                            </ol>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Task Link:</h1>
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Start Task
                            </Button>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Points: </h1>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              10
                            </Button>
                          </div>
                          <div className="flex gap-6">
                            <h1 className="my-auto">Share:</h1>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              Share
                            </Button>
                          </div>
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Earnings">
                      <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <ol className="list-decimal ml-3">
                              <li>You will get 10 points on submission of proof of task in form of screenshot. </li>
                              <li>
                              You will earn your points on successfully verification of your task by the task creator.
                              </li>
                              <li>
                              Task verification may take 24-48 hours.
                              </li>
                            </ol>
                          </div>
                          
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Disclaimer">
                      <div className=" px-3 pt-4 flex flex-col gap-3">                          
                          <div className="flex flex-col gap-2">
                            <ol className="list-decimal ml-3">
                              <li>Any fraud activity may result in blocking of your account. </li>
                              <li>
                              You must not unfollow/unlike/undo your action atleast for 30 days after submission as this may lead to account suspension.
                              </li>
                              
                            </ol>
                          </div>
                          
                          <div className="flex gap-0 shadow-base border rounded py-3 px-2">
                            <input type="file" id="myfile" name="myfile" className="w-3/4 my-auto" />
                            <Button
                              variant="outline"
                              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      
      </div>
    </>
  );
}
