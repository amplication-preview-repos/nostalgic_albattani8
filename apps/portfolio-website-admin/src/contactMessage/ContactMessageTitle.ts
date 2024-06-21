import { ContactMessage as TContactMessage } from "../api/contactMessage/ContactMessage";

export const CONTACTMESSAGE_TITLE_FIELD = "name";

export const ContactMessageTitle = (record: TContactMessage): string => {
  return record.name?.toString() || String(record.id);
};
