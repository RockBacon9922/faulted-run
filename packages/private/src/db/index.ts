import { z } from "zod";

export const agility_fault = z.object({
  type: z.enum(["Normal", "Refusal", "Handling", "Time"]),
  value: z.number(),
});
export type AgilityFault = z.infer<typeof agility_fault>;

export const agility_runner = z.object({
  name: z.string().min(1),
  dog_name: z.string().min(1),
  state: z.enum(["Checked In", "Late", "Running", "Finished"]),
  time: z.number().int().positive().min(1),
  faults: z.array(agility_fault),
});
export type AgilityRunner = z.infer<typeof agility_runner>;

export const agility_class = z.object({
  name: z.string().min(1),
  height: z.enum(["Large", "Intermediate", "Medium", "Small", "Micro"]),
  active: z.boolean(),
  runners: z.array(agility_runner).optional(),
  course_time: z.number().int().positive().min(1),
});

export type AgilityClass = z.infer<typeof agility_class>;
