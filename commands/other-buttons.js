module.exports = [{
    name: "confirm",
    type: "interaction",
    prototype: "button", 
    code: `
    $interactionUpdate[;{newEmbed:{title:Aramıza Yeni Bir Üye Katıldı!}{description:$userDisplayName[$authorID], bir kullanıcının başvurusunu onayladı! Aramıza hoşgeldin jojuk adam}{color:00ff00}};;]
    $onlyPerms[administrator;]

    `
  },{
      name: "refuse",
      type: "interaction",
      prototype: "button",
      code: `
      $interactionUpdate[;{newEmbed:{title:Az Kalsın Olacaktı!}{description:$userDisplayName[$authorID], bir kullanıcının başvurusunu reddetti! Üzülme, tekrar denersin jojuk adam}{color:ff0000}};;]
      $onlyPerms[administrator;]
      `
  }
]