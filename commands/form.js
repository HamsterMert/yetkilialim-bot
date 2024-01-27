module.exports = [
    {
      name: "staffbutton",
      type: "interaction",
      prototype: "button", 
      code: `
  $interactionModal[Yetkili Alım Formu;formID;
    {actionRow:
      {textInput:Adınız Nedir?:1:nameInput:true:Ahmet:3:10}
    }
    {actionRow:
      {textInput:Yaşınız Nedir?:1:ageInput:true:17:2:2}
    }
    {actionRow:
       {textInput:Daha Önce Yetkili Oldunuz Mu?:1:officerInput:true:Oldum/Hayır olmadım.:3:10}
    }
    {actionRow:
      {textInput:Ekstra Bir Şey Var Mı?:2:messageInput:true:Bizlere söylemek istediğin şeyleri buraya yazabilirsin. Değerlendirme yapacağız.:5:300}
    }
  ]`
    },
  ]