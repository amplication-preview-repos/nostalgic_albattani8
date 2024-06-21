import { Testimonial as TTestimonial } from "../api/testimonial/Testimonial";

export const TESTIMONIAL_TITLE_FIELD = "customerName";

export const TestimonialTitle = (record: TTestimonial): string => {
  return record.customerName?.toString() || String(record.id);
};
