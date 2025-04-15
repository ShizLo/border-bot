import axios from "axios";
export const CHATS_ID = {
  BASE: -1002215519960,
};
// export const TOPICS_ID = {
//   DEV: 4294967414,
//   FENCE: 4294967352, // Заборы
//   SERVICES: 4294967328, // Услуги
// };
const token = "7169968585:AAGyXAfkhGg6iqvabBNCyWQmziuKSTDhb6k";

export async function sendMessage(message) {
  try {
    const formattedText = `
*${message.text.header}*
${message.variables.city ? `${message.text.city}${message.variables.city}` : ""}
${
  message.variables.service
    ? `${message.text.service} ![🚨](tg://emoji?id=5458425656759032455)
${message.variables.service.map((task) => `\\- ${task}`).join("\n")}`
    : ""
}
${message.variables.name ? `${message.text.name}${message.variables.name}` : ""}
`;

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: message.chat_id,
      text: formattedText,
      parse_mode: "MarkdownV2",
    });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}

export async function sendTextMessage(message) {
  const formattedText = message.text
    .replace(/\./g, "\\.")
    .replace(/-/g, "\\-")
    .replace(/\n+/g, "\n")
    .replace(/\s*\[line\]/g, "\n")
    .replace(/=/g, "\\=")
    .replace(/>/g, "\\>")
    .replace(/\+/g, "\\+")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\]/g, "\\]")
    .replace(/\[/g, "\\[")
    .replace(/_/g, "\\_")
    .replace(/\*/g, "\\*")
    .replace(/~/g, "\\~")
    .replace(/`/g, "\\`")
    .replace(/#/g, "\\#")
    .replace(/\|/g, "\\|")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/!/g, "\\!")
    .trim();

  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: CHATS_ID.BASE,
      text: formattedText,
      parse_mode: "MarkdownV2",
    });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
}
