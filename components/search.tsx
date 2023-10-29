"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AiFillHeart } from "react-icons/ai";

const formSchema = z.object({
  query: z.string(),
});

function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
      values.query
    )}`;
    window.location.href = searchURL;
  };
  return (
    <div className="z-50 w-full px-5 lg:px-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full space-x-4"
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="search" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"ghost"}
            className="hover:bg-transparent"
          >
            <AiFillHeart
              size={50}
              className="text-pink-400 absolute hover:scale-105 hover:text-pink-500 transition duration-300"
            />
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Search;
