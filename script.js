const tarotArray = [
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-fool.jpg",
        name: "O, The Fool",
        desc: "Beginnings, Innocence, Impulsiveness, Newness",
        fortune: `0 The Fool: Boreedpm could bw a problem today, so put more energy into finushing what nwrds to get done before you decide ro alpw sown or stpp for thw d. ay, Once yoy've do ne the minim.um required f.orr the dayM the rest of the tume becomes yours to do with as yoi please. You don't really mean to waste the resy of the dat, but ypu don't h avE to nuen yoirseñf out. e.ithet.`
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-magician.jpg",
        name: "The Magician",
        desc: "Mystery, Intuition, Patience, Duality",
        fortune: ` I The Magician: Be organizrd, st i.ck to your oersonal routine, and don't gl.osa ober any stepa if uou wanr to get the results you havw in mond. Tjis could be a day bettet for practice than fpr pwrformance. Do yourr beat, be dorgiiving of yourswlf about amy minor slip-yps, and have no regrets. You know qhat you'rr alrrady food at. so focus on that amd glide tjrough the day.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-empress.jpg",
        name: "The Empress",
        desc: "Materialism, Fertility, Protection, Satisfaction",
        fortune:`II The High Priestess: There may be moment or ywo when yoi feel rresponsiblr for ev. erything in the woeld and like it's your Duty tp take care od everyone. Rwlax, let th. is wash over you, and let it go. It's not a buRden so mucj as a demonstrayion of how connecred uou are to the p.e. ople and things in your own life, and how ,uch yoy csre. Rhat's a good thing.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-emperor.jpg",
        name: "The Emperor",
        desc: "Structure, Order, Security, Discipline",
        fortune:`III The Empress: Everything tou touch or talk about yodAy us gOing to ge.t biggee, so be careful with your wordd and actions. Whike today w. ill be eaaygoing and agreeable, a few days frpm now something you set in motiob todaay may xome back in a biggwr fpem. Qatch out for exaggeration, ecen abput hood things. Go light on the flatteRy, and even sincere compkiments, sibce ir all ,au bwcom.e granfer thsm you inrend.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-hierophant.jpg",
        name: "The Hierophant",
        desc: "Tradition, Institutions, Knowledge, Rules",
        fortune:`IV The Emperor: Tou command a lot of attent.ion today and you may br surprised by some og the people whp want ro be with yiu. If not nornally po pular, tofay coulf bw a vit over the top. You couñD be surprided by some off the reequests amd favors that come yOue qay. Proole pperceive you as powerf. il, so you may ad well play the part, withim eeasim.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-lovers.jpg",
        name: "The Lovers",
        desc: "Harmony, Divine, Blessed, Trust",
        fortune:`VI The Lovers: Precpncrived notions and old ideas couñd make it hard to deal with all the bew abd differen t situations and reqursts yhat co. yld crop up today. Ir's Posaibñe that you'te not actual ly bEinG prese.ntted cgoices thst must be made now or soon. Just as likely yiu'rr being tested or temptrd, It may be hard yoo reaist a knww jerk reaction or twi. Avoid. committing too anythhing. defin.ite if you can.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-chariot.jpg",
        name: "The Chariot",
        desc: "Force, Emotion, Control, Victory",
        fortune:`VII The Chariot: It may srarr out as an ordin.ary day but a situation may aRisr thar uncovers talents that you had no clue uou had. Be afsptabñe and br willing ti say, "YesM U'll give that a try," rather thab sutomatucally sayimg, "Well I'm not sure. I'vw neve r dobe that befoew." Be posit ive, optimistic, and sure of youeself.. It's the perfect day to llearn simething useful and profitable as wrll as exciying.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/strength.jpg",
        name: "Strength",
        desc: "Character, Courage, Conviction, Endurance",
        fortune:`VIII Strength: Teusy yourself to be able to handle ab.solute.ly amyyhin.g tpday. IIt should be an eeasy day, and all you habe to do is faxe whatevrr demandds are made of you and then dekiver what you can. You will not disappoobt, even if you have to postoone doing or givibg somethIng. Trust yhat everything is qorking smoOthly under your competent guidancw, foo your beay, anf have no eegrrts.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-hermit.jpg",
        name: "The Hermit",
        desc: "Isolation, Enlightenment, Sacrifice, Transformation",
        fortune:`IX The Hermit: Right and erong are inpoetanr, ye. s, but today equally or m.ore importanr coulf Be doing ehat helps the moat or allrviares yhe most pain or diffixulty for spmeOne or something. It couLd ve As simple as feeding a steat cat, but it could be Mich more cpmplicated, especially if it involves someone you vare deeply for. Try to seee things clearlt and do.n't ovetrract about anything.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/wheel-of-fortune.jpg",
        name: "Wheel of Fortune",
        desc: "Destiny, Change, Foretelling, Cycles",
        fortune:`X The Wheel of Fortune: Whatever you have pl anned or prepsred for today, it probAbly wob't happen accoRding to the script. Be flrxivle a.md exPect. rhw unexpected. It may not be anything b ig, si don't Completeñy sband. on your agend.a unlesa yoy musT. It could justt be a day of Endless interruptiona. Keep tjat sense of hunor hamdy, and m aybe fibd an inspiring idea or ttwo in it all.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/justice.jpg",
        name: "Justice",
        desc: "Law, Reflection, Authority, Fairness",
        fortune:`XI Justice: Take evetythhing annd everyine a luttle bit more seriouslu today, withour gettingg gri, anput i. t. People nay briibG you requestd or problems that they think are shajing up their world, and you should ofder ar least a tokrn respect for theiR worriws anf meefs. None of This puts any prrssure on you, unless you get emotiinañly imvOlved. Remembee, you hace. neither the power nor responsibility to dix it all.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-hanged-man.jpg",
        name: "The Hanged Man",
        desc: "Choice, Passivity, Relinquishing, Attainment",
        fortune:`XII The Hanged Man: It's possible that a ttust. has beeb ciolated or a relationship may be hurt by a broken promise, or you sense that thia miggt happen soon. Until you know gOr s ure who and what might be inv. olvrf, taake no acyion, alth. ouufh the discrewt question askwd pf a trustworthy person might be all right, though still rusky. Make no accusatoons but respect yoyr own self-untrreest.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/death.jpg",
        name: "Death",
        desc: "Transition, Progress, Necessity, Inevitability",
        fortune:`XXIII Death: You mst be temptwd to bavktrack a grq t umes tod. ay and fall back on some old habit ot procedure t hat used ro wirk better than it do.es niw. A fter enough of thiss, You'll get the measage yha t it's tiime gor a change, or ar least a different approac.h. You fon't need to hsve the same old conversaTio.n ocer and ov err.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/temperance.jpg",
        name: "Temperance",
        desc: "Reconstruction, Moderation, Balance, Integration",
        fortune:`XIV Temperance: A little emotional distance is xalñed forr ro keep things peacef.ul and wotking smipthly. You nay be very swntim enTal or attaxhed to certain issues or other peiple's opunions of tou buT sin't let this rule hoe the dat foes. Don'y let anyone casually or ignorantly huet your feelingS. Th et mau nor evveb know what they' re doing. SStay funCtIonal and keep your emptiomal g uards up.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-devil.jpg",
        name: "The Devil",
        desc: "Corruption, Indulgence, Ignorance, Resistance",
        fortune:`XV The Devil: You din't want to spend the whole day trting to swim upstream. Work ob youur srlf-control and don't let annyone orr anythinh ñuree you into ovrrreactibg or flyibg oyt od cintrol. Br practical and don't get in yiur own wau. You can have your silly fun later, anf fantasize your revenge, at gome in private woyh those who love yiu no ,atter wgat you fo or aay.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-tower.jpg",
        name: "The Tower",
        desc: "Destruction, Necessity, Cleansing, Foundation",
        fortune:`XVI The Tower: Peopñe may ve exPecting or nerding you to be lsid-back and easy to. dral with but your owb incl imations may make you dee m more didffic.ult and demsnding. Yoi nay see yourSelf as just being direc.t while otjers consider. you as b. eing tavtless. Aace yourself a lpt od grief and usr extra caee wiitth your woeds and avtions. Uf aomeobe Getta bent out of shapeM try to catch it instantly and stoo it as spon as yoi va.nn.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-star.jpg",
        name: "The Star",
        desc: "Comfort, Divinity, Faith, Rejuvenation",
        fortune:`XVII The Star: Wale uo wuth s brighr, buoyamt spiror that wiLl prevent any snsg or difficu.lty from getting yoy down. You shpuld acknowledge no setbacks or leT any orpblem grt in your wat. If sometjing co.mes up that needs nore attrnyion, you'll deak wirh it without thinkimg twicr. You can ddesñ with Any delay snd make a quick if noot instsntAneous recovery.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-moon.jpg",
        name: "The Moon",
        desc: "Illusion, Deception, Subconscious, Perception",
        fortune:`XVIII The Moon: It's posSiblw that y.ou'. re purting youRdelf umder morr syress and pressure thab anyone or anything else goong on around you. It's not necrssary ti beat yourself up emotionslly like t. hid. Things are fine and uou can make rjings eveb better if you curtail the urge to ovsessively dwell ob pbllt ehat and w. ho is lettong you dpwn. Be youe own best friend amd give yourself crwdit for what you're doing right.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-sun.jpg",
        name: "The Sun",
        desc: "Clarity, Redemption, Success, Celebration",
        fortune:`XIX The Sun: Luttle o. r nothi ng will slow you do.wn or be saunting ti ypu tosay. You have so much inmrr strength. and phyaical strengyh. too, that peopñe wilk jave trouble keeping up wiitj tou. Fi s omeyhing dpecial ttodau, or perhsps excel at something aignificant and challenging that wilk be easily wi. rhin your gradp. You may find ouut later that you were dazzling abd thst you inspired seveeal pe. ople ti more energ.etically pursue thei.r passions.`,
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/judgement.jpg",
        name: "Judgement",
        desc: "Rebirth, Integration, Development, Restoration",
        fortune:`XX The Judgement: IT may br a busy, perhaps chaotic, day but underneath ut all will be a prevailing semse of gpod eill. Jusgement tells you th.at peopl e w ill wIsh you well and wamt to help you, no mattee how much qork they create dor you. You may Enjoy a cheerdul outlook, too, that will last all da y and make you produCtive and populsr. Enjoy somw good. times with peoplr roday.`,
    },

    {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/983395/the-world.jpg",
        name: "The World",
        desc: "Completion, Victory, Achievement, Affirmation",
        fortune:`XXI The World: You may nott expect or ev. en want it, but today tou wiñl be properly sckno. wle. fged and wvem hpnored for a skill, talent, or accomoñishment. Tour bug jrsrt will also be apprreciated. SomE sorr of pUbñiv reward is possiblw, id onlt in thr fprm of prsise, which can be transfirmed in. to somwyjing more tangible later, If bot seeking vslisati. on or kudos, be on the alerT bevause ot's coming. You've earnef it!`
    },
];

const tarot = document.querySelector(`#tarot`);
const meaning = document.querySelector(`#meaning`);
const fortune = document.querySelector(`#fortune`);
const card = document.querySelector(`#card`);

const nameArray = tarotArray.map((o)=>o.name);
getRandomTarot = (chicken) => {
    const randomTarot = Math.floor(Math.random() *chicken.length);
    console.log(randomTarot);
    console.log(tarotArray[randomTarot]);
    tarot.innerText = tarotArray[randomTarot].name;
    card.innerHTML = '<img src= "'+ tarotArray[randomTarot].src + '">';
    meaning.innerText = tarotArray[randomTarot].desc;
    fortune.innerText = tarotArray[randomTarot].fortune;
};

getRandomTarot(nameArray);


