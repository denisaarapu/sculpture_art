import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  preferredLanguage: z.enum(["en", "de"]),
});

type FormValues = z.infer<typeof formSchema>;

const NewsletterForm: FC = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      preferredLanguage: i18n.language as "en" | "de",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      setSubscriptionSuccess(true);
      setTimeout(() => {
        setSubscriptionSuccess(false);
      }, 5000);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input
                      placeholder="Your email address"
                      className="px-4 py-3 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-accent h-12"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredLanguage"
              render={({ field }) => (
                <FormItem className="sm:w-32">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-accent font-medium rounded-md transition duration-300 whitespace-nowrap h-12"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <span className="flex items-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  {t("subscribe")}
                </span>
              ) : (
                t("subscribe")
              )}
            </Button>
          </div>
        </form>
      </Form>

      <p className="text-sm text-gray-400">
        {t("privacyNote")}
      </p>

      {subscriptionSuccess && (
        <Alert className="mt-6 bg-green-800 bg-opacity-25 text-green-300 border-green-800">
          <CheckCircle className="h-4 w-4 mr-2" />
          <AlertDescription>{t("subscriptionSuccess")}</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default NewsletterForm;
