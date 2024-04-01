import { useFormAction, useNavigation } from "@remix-run/react";

export function useIsSubmitting({
  formAction,
  formMethod = "POST",
}: {
  formAction?: string;
  formMethod?: "GET" | "POST";
}) {
  const contextualFormAction = useFormAction();
  const navigation = useNavigation();

  return (
    navigation.state === "submitting" &&
    navigation.formAction === (formAction ?? contextualFormAction) &&
    navigation.formMethod === formMethod
  );
}
