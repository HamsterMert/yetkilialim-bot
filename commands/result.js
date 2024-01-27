module.exports = [
    {
      name: "formID",
      type: "interaction",
      prototype: "modal", 
      code: `
  $interactionReply[Cevaplarınız Yetkililerimize İletildi. Lütfen sabırla bekle!;;;;everyone;true]
  
  $author[Yetkili Alım Sistemi]
  $title[$userDisplayName Başvuruda Bulundu!]
  $addField[Yetkiliye Mesaj;\`\`\`◟$textInputValue[messageInput]\`\`\`]
  $addField[Hiç görevli oldunuz mu?;\`\`\`◟$textInputValue[officerInput]\`\`\`;true]
  $addField[Yaş;\`\`\`◟$textInputValue[ageInput]\`\`\`;true]
  $addField[İsim;\`\`\`◟$textInputValue[nameInput]\`\`\`;true]
  $addButton[1;Reddet;danger;refuse;false;❌]
  $addButton[1;Onayla;success;confirm;false;✅]
  $color[DarkButNotBlack]
  $useChannel[1142384031615418368]
  `
    },
  ]