/* ---------- DEMO DATA (fictional; no real businesses, addresses, prices or availability) ---------- */
const LOC={Rajasthan:{Jaipur:['Malviya Nagar','Vaishali Nagar','Mansarovar','Jagatpura','C-Scheme']},Maharashtra:{Pune:['Kharadi','Viman Nagar','Baner','Hinjawadi','Wakad']}};
// explicit demo "nearby" relationships (not measured distances)
const NEAR={'Malviya Nagar':['C-Scheme','Mansarovar','Jagatpura'],'Vaishali Nagar':['Mansarovar','C-Scheme'],'Mansarovar':['Vaishali Nagar','Malviya Nagar'],'Jagatpura':['Malviya Nagar','Mansarovar'],'C-Scheme':['Malviya Nagar','Vaishali Nagar'],'Kharadi':['Viman Nagar'],'Viman Nagar':['Kharadi'],'Baner':['Wakad','Hinjawadi'],'Wakad':['Baner','Hinjawadi'],'Hinjawadi':['Wakad','Baner']};
const AREAINFO={};Object.entries(LOC).forEach(([s,cs])=>Object.entries(cs).forEach(([c,as])=>as.forEach(a=>AREAINFO[a]=[s,c])));
const SOC=['Wedding','Engagement','Reception','Birthday','Anniversary','Other function'],COR=['Corporate event','Reception','Other function'];
const EVENTS=['Wedding','Engagement','Reception','Birthday','Anniversary','Corporate event','Other function'];
const TYPES=['Indoor banquet hall','Outdoor garden/lawn','Indoor + outdoor venue','Resort','Hotel','Farmhouse','Convention centre','Community hall','Corporate venue'];
const SVL={cat:'Catering',deco:'Decoration',stage:'Stage & lighting',sound:'Sound / DJ',logi:'Logistics',accom:'Accommodation'};
const V=o=>({suites:0,preparationRooms:null,stageWidthFt:null,stageDepthFt:null,extraCharges:[],includedServices:[],supportedEventDays:1,accommodationCost:null,parkingCapacity:null,vegetarianOptions:null,jainOptions:null,images:[],availabilityStatus:'Availability not verified (demo)',demoData:true,...o});
const VENUES=[
V({id:'aurelia-hall',name:'Aurelia Banquet Hall',type:'Indoor banquet hall',state:'Rajasthan',city:'Jaipur',locality:'Malviya Nagar',description:'Pillar-free, air-conditioned hall with a raised stage and bridal suite, made for large indoor weddings.',events:SOC,floatingCapacity:600,seatedCapacity:400,indoorCapacity:600,outdoorCapacity:0,hallAreaSqFt:9000,lawnAreaSqFt:0,stageWidthFt:24,stageDepthFt:16,guestRooms:0,preparationRooms:2,indoorOutdoorType:'Indoor',hasAC:true,hasParking:true,parkingCapacity:80,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:false,vegetarianOptions:true,jainOptions:true,cateringPricePerPlate:1100,venueRental:150000,rentalPricingModel:'perEvent',decorationCost:120000,stageCost:40000,lightingCost:30000,soundCost:25000,logisticsCost:15000,includedServices:['sound'],extraCharges:['Overtime ₹10,000 per hour (demo)']}),
V({id:'rosewater-garden',name:'Rosewater Marriage Garden',type:'Outdoor garden/lawn',state:'Rajasthan',city:'Jaipur',locality:'Mansarovar',description:'Open lawns under string lights with a floral mandap area. Bring your own caterer.',events:SOC,floatingCapacity:1000,seatedCapacity:600,indoorCapacity:0,outdoorCapacity:1000,hallAreaSqFt:0,lawnAreaSqFt:20000,stageWidthFt:30,stageDepthFt:20,guestRooms:0,preparationRooms:2,indoorOutdoorType:'Outdoor',hasAC:false,hasParking:true,parkingCapacity:200,hasGenerator:false,wheelchairAccessible:true,inHouseCatering:false,externalCateringAllowed:true,cateringPricePerPlate:null,venueRental:180000,rentalPricingModel:'perEvent',decorationCost:150000,stageCost:50000,lightingCost:40000,soundCost:null,logisticsCost:null,extraCharges:['Generator hire on request: price not supplied']}),
V({id:'sandstone-lawns',name:'Sandstone Courtyard & Lawns',type:'Indoor + outdoor venue',state:'Rajasthan',city:'Jaipur',locality:'Vaishali Nagar',description:'A sandstone-style hall opening onto a wide lawn, so ceremonies and dinner can flow between spaces.',events:SOC,floatingCapacity:800,seatedCapacity:500,indoorCapacity:300,outdoorCapacity:500,hallAreaSqFt:6000,lawnAreaSqFt:12000,stageWidthFt:28,stageDepthFt:18,guestRooms:0,preparationRooms:3,indoorOutdoorType:'Indoor + Outdoor',hasAC:true,hasParking:true,parkingCapacity:120,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:true,vegetarianOptions:true,jainOptions:true,cateringPricePerPlate:1350,venueRental:220000,rentalPricingModel:'perEvent',decorationCost:160000,stageCost:45000,lightingCost:35000,soundCost:30000,logisticsCost:20000,extraCharges:['Outside-caterer kitchen fee ₹25,000 (demo)']}),
V({id:'kesari-palms',name:'Kesari Palms Resort',type:'Resort',state:'Rajasthan',city:'Jaipur',locality:'Jagatpura',description:'Palm-lined resort with 48 guest rooms, a banquet wing and a garden lawn. Good for two-day functions.',events:SOC,floatingCapacity:700,seatedCapacity:450,indoorCapacity:250,outdoorCapacity:500,hallAreaSqFt:5000,lawnAreaSqFt:15000,stageWidthFt:24,stageDepthFt:16,guestRooms:48,suites:6,preparationRooms:4,indoorOutdoorType:'Indoor + Outdoor',hasAC:true,hasParking:true,parkingCapacity:150,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:false,vegetarianOptions:true,jainOptions:true,cateringPricePerPlate:1600,venueRental:300000,rentalPricingModel:'perDay',decorationCost:200000,stageCost:50000,lightingCost:40000,soundCost:35000,logisticsCost:30000,accommodationCost:216000,supportedEventDays:2,includedServices:['sound'],extraCharges:['Room price shown is all 48 rooms for one night (demo)']}),
V({id:'nagar-samaj',name:'Nagar Samaj Community Hall',type:'Community hall',state:'Rajasthan',city:'Jaipur',locality:'Mansarovar',description:'Simple, affordable community hall for engagements, birthdays and smaller family functions.',events:SOC,floatingCapacity:350,seatedCapacity:250,indoorCapacity:350,outdoorCapacity:0,hallAreaSqFt:4000,lawnAreaSqFt:0,stageWidthFt:16,stageDepthFt:10,guestRooms:0,preparationRooms:1,indoorOutdoorType:'Indoor',hasAC:false,hasParking:true,parkingCapacity:30,hasGenerator:false,wheelchairAccessible:null,inHouseCatering:false,externalCateringAllowed:true,cateringPricePerPlate:null,venueRental:45000,rentalPricingModel:'perEvent',decorationCost:null,stageCost:8000,lightingCost:6000,soundCost:7000,logisticsCost:5000}),
V({id:'maharani-grand',name:'The Maharani Grand',type:'Hotel',state:'Rajasthan',city:'Jaipur',locality:'C-Scheme',description:'Premium hotel with a grand ballroom, formal lawns and 120 rooms. Three-day wedding packages are possible.',events:SOC,floatingCapacity:1500,seatedCapacity:900,indoorCapacity:900,outdoorCapacity:600,hallAreaSqFt:14000,lawnAreaSqFt:20000,stageWidthFt:40,stageDepthFt:24,guestRooms:120,suites:14,preparationRooms:6,indoorOutdoorType:'Indoor + Outdoor',hasAC:true,hasParking:true,parkingCapacity:400,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:false,vegetarianOptions:true,jainOptions:true,cateringPricePerPlate:2800,venueRental:650000,rentalPricingModel:'perDay',decorationCost:450000,stageCost:90000,lightingCost:80000,soundCost:60000,logisticsCost:50000,accommodationCost:540000,supportedEventDays:3,includedServices:['stage','sound'],extraCharges:['Banquet service charge not supplied']}),
V({id:'kharadi-convene',name:'Kharadi Convene',type:'Corporate venue',state:'Maharashtra',city:'Pune',locality:'Kharadi',description:'Modern event floor with AV-ready stage, breakout rooms and flexible seating for conferences and receptions.',events:COR,floatingCapacity:400,seatedCapacity:300,indoorCapacity:400,outdoorCapacity:0,hallAreaSqFt:5500,lawnAreaSqFt:0,stageWidthFt:20,stageDepthFt:12,guestRooms:0,preparationRooms:3,indoorOutdoorType:'Indoor',hasAC:true,hasParking:true,parkingCapacity:120,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:true,vegetarianOptions:true,jainOptions:false,cateringPricePerPlate:950,venueRental:90000,rentalPricingModel:'perDay',decorationCost:30000,stageCost:25000,lightingCost:20000,soundCost:15000,logisticsCost:10000,supportedEventDays:2,includedServices:['sound']}),
V({id:'wakad-grove',name:'Wakad Grove Estate',type:'Resort',state:'Maharashtra',city:'Pune',locality:'Wakad',description:'Estate resort with orchard lawns and 60 rooms, planned for multi-day weddings with separate function spaces.',events:SOC,floatingCapacity:900,seatedCapacity:600,indoorCapacity:300,outdoorCapacity:700,hallAreaSqFt:7000,lawnAreaSqFt:25000,stageWidthFt:32,stageDepthFt:20,guestRooms:60,suites:8,preparationRooms:5,indoorOutdoorType:'Indoor + Outdoor',hasAC:true,hasParking:true,parkingCapacity:250,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:true,vegetarianOptions:true,jainOptions:true,cateringPricePerPlate:1750,venueRental:350000,rentalPricingModel:'perDay',decorationCost:280000,stageCost:60000,lightingCost:50000,soundCost:40000,logisticsCost:35000,accommodationCost:270000,supportedEventDays:4,includedServices:['stage'],extraCharges:['Setup day before event charged at 50% of daily rental (demo)']}),
V({id:'baner-orchard',name:'Baner Orchard Farmhouse',type:'Farmhouse',state:'Maharashtra',city:'Pune',locality:'Baner',description:'Private orchard farmhouse with a small hall, wide lawn and ten rooms. Several details are not yet confirmed.',events:SOC,floatingCapacity:450,seatedCapacity:300,indoorCapacity:100,outdoorCapacity:400,hallAreaSqFt:1800,lawnAreaSqFt:9000,guestRooms:10,suites:2,preparationRooms:2,indoorOutdoorType:'Indoor + Outdoor',hasAC:null,hasParking:true,parkingCapacity:60,hasGenerator:true,wheelchairAccessible:false,inHouseCatering:false,externalCateringAllowed:true,cateringPricePerPlate:null,venueRental:120000,rentalPricingModel:'perDay',decorationCost:90000,stageCost:20000,lightingCost:18000,soundCost:null,logisticsCost:12000,accommodationCost:60000,supportedEventDays:2}),
V({id:'pearl-banquet',name:'Pearl Banquet & Suites',type:'Indoor banquet hall',state:'Maharashtra',city:'Pune',locality:'Viman Nagar',description:'Package-style banquet where the rental includes the dining service for the contracted guest count.',events:SOC,floatingCapacity:500,seatedCapacity:350,indoorCapacity:500,outdoorCapacity:0,hallAreaSqFt:7000,lawnAreaSqFt:0,stageWidthFt:24,stageDepthFt:14,guestRooms:20,suites:2,preparationRooms:2,indoorOutdoorType:'Indoor',hasAC:true,hasParking:true,parkingCapacity:100,hasGenerator:true,wheelchairAccessible:true,inHouseCatering:true,externalCateringAllowed:false,vegetarianOptions:true,jainOptions:true,cateringPricePerPlate:1200,venueRental:280000,rentalPricingModel:'perEvent',decorationCost:100000,stageCost:30000,lightingCost:25000,soundCost:20000,logisticsCost:15000,accommodationCost:90000,includedServices:['cat'],extraCharges:['Catering included only up to contracted guest count (demo)']})
];
const VBY=Object.fromEntries(VENUES.map(v=>[v.id,v]));
const CATS=[['Wedding Venues',v=>v.events.includes('Wedding')],['Banquet Halls',v=>/banquet|Community/.test(v.type)],['Marriage Gardens',v=>/garden|Farmhouse/i.test(v.type)],['Outdoor Lawns',v=>v.lawnAreaSqFt>=8000],['Resorts',v=>v.type==='Resort'],['Hotels',v=>v.type==='Hotel'],['Engagement Venues',v=>v.events.includes('Engagement')],['Corporate Spaces',v=>v.events.includes('Corporate event')]];
// facility checks return true | false | null (unknown)
const FAC=[['ac','AC',v=>v.hasAC],['lawn','Lawn',v=>v.lawnAreaSqFt==null?null:v.lawnAreaSqFt>0],['stage','Stage',v=>v.stageWidthFt==null?null:v.stageWidthFt>0],['parking','Parking',v=>v.hasParking],['gen','Generator / power backup',v=>v.hasGenerator],['access','Wheelchair accessible',v=>v.wheelchairAccessible],['inhouse','In-house catering',v=>v.inHouseCatering],['external','External caterer allowed',v=>v.externalCateringAllowed],['veg','Vegetarian catering',v=>v.vegetarianOptions],['jain','Jain catering',v=>v.jainOptions],['multi','Multiple event days',v=>v.supportedEventDays>1],['rooms','Guest rooms',v=>v.guestRooms==null?null:v.guestRooms>0]];
const FACF=Object.fromEntries(FAC.map(x=>[x[0],x]));

/* ---------- PURE LOGIC ---------- */
const N=x=>{if(x===''||x==null)return null;const n=Number(x);return Number.isFinite(n)?n:null};
const fmt=n=>n==null?'Unknown':'₹'+Math.round(n).toLocaleString('en-IN');
const num=n=>n==null?'Unknown':Number(n).toLocaleString('en-IN');
const yn=b=>b===true?'Yes':b===false?'No':'Unknown';
const localDateISO=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const dateRangeError=(from,to)=>{const today=localDateISO();if(from&&!/^\d{4}-\d{2}-\d{2}$/.test(from))return'Enter a valid start date.';if(to&&!/^\d{4}-\d{2}-\d{2}$/.test(to))return'Enter a valid end date.';if(from&&from<today)return'Event dates cannot be in the past.';if(to&&to<today)return'Event dates cannot be in the past.';if(to&&from&&to<from)return'End date must be on or after the start date.';return''};
const nonNegative=x=>{const n=N(x);return n==null?null:Math.max(0,n)};
function ratio(h,l){if(!(h>0)||!(l>0))return null;const r=l/h,t=x=>String(parseFloat(x.toFixed(1)));return r>=1?'1:'+t(r):t(1/r)+':1'}
const stageArea=v=>v.stageWidthFt>0&&v.stageDepthFt>0?v.stageWidthFt*v.stageDepthFt:null;
const rentalTxt=v=>v.venueRental==null?'Rental unknown':fmt(v.venueRental)+(v.rentalPricingModel==='perDay'?' / day':v.rentalPricingModel==='perEvent'?' / event':'');
const store={get(k,fb,fix){try{const v=JSON.parse(localStorage.getItem(k));const r=v==null?null:fix?fix(v):v;return r==null?fb:r}catch(e){return fb}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const FAV_KEY='venuewise.favs.v1',CMP_KEY='venuewise.compare.v1',EST_KEY='venuewise.estimates.v1',THEME_KEY='venuewise.theme';
// location
function normLoc(l){const cities=l.state&&LOC[l.state]?Object.keys(LOC[l.state]):[];const city=cities.includes(l.city)?l.city:'';const ok=city?LOC[l.state][city]:[];return{...l,state:cities.length||LOC[l.state]?l.state:'',city,areas:(l.areas||[]).filter(a=>ok.includes(a))}}
function locMatch(v,l){if(l.state&&v.state!==l.state)return null;if(l.city&&v.city!==l.city)return null;const a=l.areas||[];if(!a.length||a.includes(v.locality))return'exact';return l.nearby&&a.some(x=>(NEAR[x]||[]).includes(v.locality))?'nearby':null}
const nearList=l=>[...new Set((l.areas||[]).flatMap(a=>NEAR[a]||[]))].filter(a=>!(l.areas||[]).includes(a));
// costs
function calcCost(i){const d=Math.max(1,Math.round(nonNegative(i.days)||1)),g=nonNegative(i.guests),m=Math.max(1,nonNegative(i.meals)||1),inc=i.incl||{},pl=nonNegative(i.plate),r=nonNegative(i.rental),dc=nonNegative(i.deco),st=nonNegative(i.stage),so=nonNegative(i.sound),ac=nonNegative(i.accom),lg=nonNegative(i.logi),ot=nonNegative(i.other);
 const items=[
 {k:'cat',label:'Catering',amt:g!=null&&pl!=null?g*pl*m:null,basis:g!=null&&pl!=null?`${g} guests × ${fmt(pl)} × ${m} meal${m>1?'s':''}`:'Needs guest count and per-plate price'},
 {k:'rent',label:'Venue rental',amt:r==null?null:i.rentalModel==='perDay'?r*d:r,basis:r==null?'Rental price unknown':i.rentalModel==='perDay'?`${fmt(r)} × ${d} chargeable day${d>1?'s':''}`:'One-time per event'},
 {k:'deco',label:'Decoration',amt:dc==null?null:i.decoPerDay?dc*d:dc,basis:dc==null?'Price unknown':i.decoPerDay?`${fmt(dc)} × ${d} days`:'One-time'},
 {k:'stage',label:'Stage & lighting',amt:st,basis:st==null?'Price unknown':'One-time'},
 {k:'sound',label:'Sound / DJ',amt:so,basis:so==null?'Price unknown':'One-time'},
 {k:'accom',label:'Accommodation',amt:ac,opt:true,basis:ac==null?'Not added':'As entered'},
 {k:'logi',label:'Transport & logistics',amt:lg==null?null:i.logiPerDay?lg*d:lg,basis:lg==null?'Price unknown':i.logiPerDay?`${fmt(lg)} × ${d} days`:'One-time'},
 {k:'other',label:'Other costs',amt:ot,opt:true,basis:ot==null?'None entered':'As entered'}];
 items.forEach(x=>{x.state=inc[x.k]?'included':x.amt==null?(x.opt?'excluded':'unknown'):'estimated';x.cost=x.state==='estimated'?x.amt:0});
 const sub=items.reduce((s,x)=>s+x.cost,0),cont=sub*(nonNegative(i.cont)||0)/100;
 return{items,sub,cont,total:sub+cont,unknown:items.filter(x=>x.state==='unknown').map(x=>x.label),complete:!items.some(x=>x.state==='unknown'),d,g}}
function vIn(v,c){const inc={};(v.includedServices||[]).forEach(k=>inc[k]=true);
 const st=v.stageCost==null||v.lightingCost==null?null:v.stageCost+v.lightingCost;
 return{guests:c.guests,days:c.days,meals:c.meals,plate:v.cateringPricePerPlate,rental:v.venueRental,rentalModel:v.rentalPricingModel,deco:v.decorationCost,stage:st,sound:v.soundCost,accom:c.rooms&&v.guestRooms>0?v.accommodationCost:null,logi:v.logisticsCost,cont:c.cont||0,incl:inc}}
const estimate=(v,c)=>calcCost(vIn(v,{guests:nonNegative(c.guests),days:nonNegative(c.days)||1,meals:nonNegative(c.meals)||1,rooms:!!c.rooms}));
// filtering
const ge=(val,min)=>N(min)==null||(val!=null&&val>=+min),le=(val,max)=>N(max)==null||(val!=null&&val<=+max);
const capOf=(v,b)=>b==='seated'?v.seatedCapacity:v.floatingCapacity;
function filterVenues(list,f){const q=(f.q||'').trim().toLowerCase();if(dateRangeError(f.date,f.dateTo))return[];
 return list.filter(v=>{
  if(q&&![v.name,v.type,v.city,v.state,v.locality,v.description,...v.events].join(' ').toLowerCase().includes(q))return false;
  if(!locMatch(v,f))return false;
  if(f.type&&v.type!==f.type)return false;if(f.io&&v.indoorOutdoorType!==f.io)return false;
  if(f.cat){const c=CATS.find(c=>c[0]===f.cat);if(c&&!c[1](v))return false}
  if(f.event&&!v.events.includes(f.event))return false;
  const cap=capOf(v,f.basis);
  if(!ge(cap,f.guests)||!le(cap,f.maxGuests)||!ge(v.seatedCapacity,f.minSeated)||!ge(v.floatingCapacity,f.minFloating)||!ge(v.indoorCapacity,f.minIndoor)||!ge(v.outdoorCapacity,f.minOutdoor))return false;
  if(!ge(v.venueRental,f.minRent)||!le(v.venueRental,f.maxRent)||!le(v.cateringPricePerPlate,f.maxPlate))return false;
  if(N(f.budget)!=null&&estimate(v,f).total>+f.budget)return false;
  if(!ge(v.hallAreaSqFt,f.minHall)||!ge(v.lawnAreaSqFt,f.minLawn)||!ge(v.stageWidthFt,f.minStageW)||!ge(v.stageDepthFt,f.minStageD)||!ge(v.guestRooms,f.minRooms)||!ge(v.supportedEventDays,f.days))return false;
  for(const [k,,fn] of FAC)if(f[k]&&fn(v)!==true)return false;
  return true})}
const nn=(a,b)=>a==null?(b==null?0:1):b==null?-1:a-b;
function sortVenues(list,by,f){const e=v=>estimate(v,f||{});const c={
 rent:(x,y)=>nn(x.venueRental,y.venueRental),
 total:(x,y)=>{const a=e(x),b=e(y);return(a.complete?0:1)-(b.complete?0:1)||a.total-b.total},
 cap:(x,y)=>y.floatingCapacity-x.floatingCapacity,lawn:(x,y)=>(y.lawnAreaSqFt==null?-Infinity:y.lawnAreaSqFt)-(x.lawnAreaSqFt==null?-Infinity:x.lawnAreaSqFt),
 rooms:(x,y)=>(y.guestRooms||0)-(x.guestRooms||0),
 best:(x,y)=>((locMatch(x,f||{})==='exact'?0:1)-(locMatch(y,f||{})==='exact'?0:1))||(FAC.filter(k=>k[2](y)===true).length-FAC.filter(k=>k[2](x)===true).length)}[by]||(()=>0);
 return [...list].sort((x,y)=>c(x,y)||x.name.localeCompare(y.name))}
// wizard: hard rules + weighted preferences
const NEEDS=['stage','ac','parking','gen','access','inhouse','external','veg','jain'];
function matchVenues(list,p){const out=[];
 for(const v of list){const lm=locMatch(v,p);if(!lm)continue;
  let score=0,max=0;const why=[],miss=[],unk=[];
  if(p.city){max+=3;if(lm==='exact'){score+=3;why.push(p.areas&&p.areas.length?`in your chosen area, ${v.locality}`:`in ${v.city}`)}else{score+=1;why.push(`${v.locality} is a listed nearby area (demo relationship, not a measured distance)`)}}
  const g=N(p.guests),cap=capOf(v,p.basis);
  if(g){if(cap<g)continue;max+=2;score+=2;why.push(`${p.basis==='seated'?'seated':'floating'} capacity ${num(cap)} covers ${g} guests`)}
  const days=N(p.days)||1;if(days>1){if(v.supportedEventDays<days)continue;why.push(`supports ${v.supportedEventDays} event days`)}
  for(const [k,label,val] of [['minHall','hall area',v.hallAreaSqFt],['minLawn','lawn area',v.lawnAreaSqFt],['minStageW','stage width',v.stageWidthFt]]){const m=N(p[k]);if(m==null)continue;if(val==null)unk.push(label+' not specified');else if(val<m)continue;else{why.push(`${label} ${num(val)} ≥ ${m}`)}}
  if(N(p.minHall)!=null&&v.hallAreaSqFt!=null&&v.hallAreaSqFt<+p.minHall)continue;
  if(N(p.minLawn)!=null&&v.lawnAreaSqFt!=null&&v.lawnAreaSqFt<+p.minLawn)continue;
  if(N(p.minStageW)!=null&&v.stageWidthFt!=null&&v.stageWidthFt<+p.minStageW)continue;
  const rn=N(p.rent);if(rn!=null){if(v.venueRental==null)unk.push('rental price unknown');else if(v.venueRental>rn)continue;else why.push(`rental ${fmt(v.venueRental)} within ${fmt(rn)}`)}
  const rr=N(p.rooms);if(rr>0){if(!(v.guestRooms>=rr))continue;why.push(`${v.guestRooms} guest rooms`)}
  const est=estimate(v,{guests:g,days,meals:1,rooms:rr>0});
  const b=N(p.budget);if(b!=null){if(est.total>b)continue;if(!est.complete)unk.push('total may rise: '+est.unknown.join(', ').toLowerCase()+' unknown');else why.push(`estimated total ${fmt(est.total)} within ${fmt(b)}`)}
  if(p.io&&p.io!=='any'){max+=2;const ok=p.io==='Both'?v.indoorOutdoorType==='Indoor + Outdoor':p.io==='Indoor'?v.indoorCapacity>0:v.outdoorCapacity>0;if(ok){score+=2;why.push(`${p.io==='Both'?'indoor + outdoor':p.io.toLowerCase()} space as preferred`)}else miss.push(`not an ${p.io==='Both'?'indoor + outdoor':p.io.toLowerCase()} venue`)}
  let drop=false,fm=0,ft=0;
  for(const k of NEEDS){const n=(p.needs||{})[k];if(!n)continue;const [,label,fn]=FACF[k],r=fn(v);ft++;
   if(n==='nice')max+=2;
   if(r===true){fm++;if(n==='nice')score+=2;why.push(`${n==='must'?'confirmed':'has'}: ${label.toLowerCase()}`)}
   else if(r===false){if(n==='must')drop=true;else miss.push('no '+label.toLowerCase())}
   else unk.push(label.toLowerCase()+' not confirmed');}
  if(drop)continue;
  const pct=max?Math.round(score/max*100):100;
  out.push({v,score,pct,why,miss,unk,est,lm,fm,ft,label:pct>=80?'Strong match':pct>=50?'Good match':'Partial match'})}
 return out.sort((x,y)=>y.score-x.score||x.est.total-y.est.total||x.v.name.localeCompare(y.v.name))}
function toQS(o){const p=new URLSearchParams();Object.entries(o).forEach(([k,v])=>{if(Array.isArray(v)){if(v.length)p.set(k,v.join('|'))}else if(v===true)p.set(k,'1');else if(v!==''&&v!=null&&v!==false)p.set(k,v)});return p.toString()}
const BOOLK=new Set([...FAC.map(x=>x[0]),'nearby']);
function fromQS(s){const o={};new URLSearchParams(s).forEach((v,k)=>{o[k]=k==='areas'?v.split('|').filter(Boolean):BOOLK.has(k)?v==='1':v});return o}

const {useState,useEffect,useMemo,useCallback}=React;const html=htm.bind(React.createElement);
function useStored(k,fb,fix){const[v,s]=useState(()=>store.get(k,fb,fix));useEffect(()=>store.set(k,v),[v]);return[v,s]}
function useHash(){const g=()=>location.hash.replace(/^#/,'')||'/';const[h,set]=useState(g);
 useEffect(()=>{const f=()=>{set(g());window.scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return h}

/* ---------- COMPONENTS ---------- */
const LINKS=[['/','Discover','Discover','⌂'],['/explore','Explore Venues','Explore','⌕'],['/find-my-venue','Find My Venue','Find','✦'],['/compare','Compare Venues','Compare','⇄'],['/budget','Budget Planner','Budget','₹'],['/saved','Saved Venues','Saved','♥']];
function Nav({path,cls,mobile,cmpN}){const cur=p=>p==='/'?path==='/':path.startsWith(p)||(p==='/explore'&&path.startsWith('/venue/'));
 return html`<nav aria-label=${mobile?'Mobile':'Main'} className=${cls}>${LINKS.map(([p,l,s,i])=>html`<a key=${p} href=${'#'+p} aria-current=${cur(p)?'page':undefined}><span aria-hidden="true">${i}</span>${mobile?s:l}${p==='/compare'&&cmpN>0?` (${cmpN})`:''}</a>`)}</nav>`}
function Scene({v}){const i=VENUES.indexOf(v),io=v.indoorOutdoorType,pal=[['#A9C9F2','#B4E0A6','#D63A22'],['#FFD23F','#A9C9F2','#15171C'],['#CBC4F4','#B4E0A6','#D63A22'],['#F4A08A','#CBC4F4','#15171C']][i%4],out=io!=='Indoor',ind=io!=='Outdoor',x0=out?118:50,w=out?164:300;
 return html`<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id=${'g'+i} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor=${pal[0]}/><stop offset="1" stopColor=${pal[1]}/></linearGradient></defs>
 <rect width="400" height="150" fill=${'url(#g'+i+')'}/>
 ${out&&html`<g><ellipse cx="200" cy="165" rx="270" ry="55" fill=${pal[2]}/>${[36,84,320,368].map((x,k)=>html`<g key=${k}><rect x=${x-3} y=${84+k%2*8} width="6" height="28" fill="#4a3a2a"/><circle cx=${x} cy=${74+k%2*8} r=${22-k%2*4} fill=${pal[2]}/></g>`)}</g>`}
 ${ind&&html`<g><rect x=${x0} y="46" width=${w} height="86" fill="#FFFCF5" stroke="#1D2520" strokeWidth="2.5"/><rect x=${x0-8} y="38" width=${w+16} height="12" fill=${pal[2]} stroke="#1D2520" strokeWidth="2.5"/>${Array.from({length:Math.floor(w/44)},(_,k)=>html`<path key=${k} d=${`M${x0+12+k*44} 132 V90 a14 14 0 0 1 28 0 V132 Z`} fill=${pal[1]} stroke="#1D2520" strokeWidth="2"/>`)}</g>`}
 ${Array.from({length:14},(_,k)=>html`<circle key=${k} cx=${14+k*29} cy=${18+Math.sin(k)*6} r="3" fill="#FFD23F"/>`)}</svg>`}
function VImg({v,big}){return html`<div className=${'img'+(big?' big':'')}><${Scene} v=${v}/><span className="lbl">Illustrative image · demo venue</span></div>`}
const Crumb=({v})=>html`<p className="crumb">${v.state} › ${v.city} › ${v.locality}</p>`;
function VenueCard({v,fav,toggle,cmp,toggleCmp,est,children}){const inC=cmp.includes(v.id);
 return html`<article className=${'card'}><${VImg} v=${v}/>
  <button className="fav" aria-pressed=${fav} aria-label=${(fav?'Remove ':'Save ')+v.name+(fav?' from saved venues':' to saved venues')} onClick=${()=>toggle(v)}>${fav?'♥':'♡'}</button>
  <div className="body"><${Crumb} v=${v}/><h3><a href=${'#/venue/'+v.id}>${v.name}</a></h3>
   <p className="muted" style=${{marginBottom:6}}>${v.type} · ${v.indoorOutdoorType}</p>
   <p style=${{marginBottom:4}}><b>${num(v.floatingCapacity)}</b> floating · <b>${num(v.seatedCapacity)}</b> seated${v.guestRooms>0?html` · <b>${v.guestRooms}</b> rooms`:''}</p>
   <p className="price">${rentalTxt(v)}</p><p className="muted" style=${{fontSize:'.85rem'}}>${v.cateringPricePerPlate==null?'Per-plate price unknown':fmt(v.cateringPricePerPlate)+' per plate'} · illustrative demo pricing</p>
   ${est&&html`<p style=${{fontWeight:700,marginBottom:6}}>${est.complete?'Est. total '+fmt(est.total):'Est. total ≥ '+fmt(est.total)+' + unknown items'}</p>`}
   <div>${v.hasAC===true&&html`<span className="tag">AC</span>`}${v.hasParking&&html`<span className="tag">Parking</span>`}${v.hasGenerator&&html`<span className="tag">Generator</span>`}${v.inHouseCatering&&html`<span className="tag">In-house catering</span>`}${v.wheelchairAccessible===true&&html`<span className="tag">Accessible</span>`}${v.supportedEventDays>1&&html`<span className="tag gold">${v.supportedEventDays}-day</span>`}${v.hasAC==null&&html`<span className="tag warn">AC unknown</span>`}</div>
   ${children}
   <div className="acts"><button className="btn" aria-pressed=${inC} onClick=${()=>toggleCmp(v)}>${inC?'✓ Comparing':'+ Compare'}</button><a className="btn" href=${'#/venue/'+v.id}>Details</a></div></div></article>`}
const Disclaimer=()=>html`<p className="note">Heads up: every venue, price, capacity, measurement and location relationship here is fictional demo data. Prices are illustrative estimates, not quotations, and availability is never verified.</p>`;
const Grid=({list,c,ctx})=>html`<div className="grid">${list.map(v=>html`<${VenueCard} key=${v.id} v=${v} fav=${c.favs.includes(v.id)} toggle=${c.toggle} cmp=${c.cmp} toggleCmp=${c.toggleCmp} est=${ctx?estimate(v,ctx):null}/>`)}</div>`;

function LocationPicker({v,onChange,idp}){const cities=v.state?Object.keys(LOC[v.state]||{}):[],areas=v.state&&v.city?LOC[v.state][v.city]:[],near=nearList(v);
 return html`<div style=${{display:'grid',gap:10}}>
  <div><label htmlFor=${idp+'-st'}>State or region</label><select id=${idp+'-st'} value=${v.state} onChange=${e=>onChange({state:e.target.value})}><option value="">Any state</option>${Object.keys(LOC).map(s=>html`<option key=${s}>${s}</option>`)}</select></div>
  <div><label htmlFor=${idp+'-ct'}>City</label><select id=${idp+'-ct'} value=${v.city} disabled=${!v.state} onChange=${e=>onChange({city:e.target.value})}><option value="">${v.state?'Any city':'Choose a state first'}</option>${cities.map(s=>html`<option key=${s}>${s}</option>`)}</select></div>
  <div role="group" aria-label=${'Areas in '+(v.city||'city')}><label>Area / locality (pick one or more)</label>${areas.length?html`<div className="chips" style=${{margin:'4px 0'}}>${areas.map(a=>html`<button type="button" key=${a} className="chip" aria-pressed=${v.areas.includes(a)} onClick=${()=>onChange({areas:v.areas.includes(a)?v.areas.filter(x=>x!==a):[...v.areas,a]})}>${a}</button>`)}</div>`:html`<p className="muted" style=${{margin:0,fontSize:'.85rem'}}>Choose a city to see its areas.</p>`}</div>
  <label className="chk" style=${{fontWeight:700}}><input type="checkbox" checked=${!!v.nearby} onChange=${e=>onChange({nearby:e.target.checked})}/>Include nearby areas</label>
  ${v.nearby&&html`<p className="muted" style=${{fontSize:'.82rem',margin:0}}>${near.length?'Also including (demo nearby links): '+near.join(', ')+'.':'Select an area to see its nearby areas.'}</p>`}
  <p className="muted" style=${{fontSize:'.78rem',margin:0}}>Radius search (5–25 km) isn’t offered: the demo data has no coordinates, only explicit nearby-area links.</p>
  <div><button type="button" className="btn" onClick=${()=>onChange({state:'',city:'',areas:[],nearby:false})} disabled=${!v.state&&!v.city&&!v.areas.length}>Clear location</button></div></div>`}

function SearchForm({sf,setSf}){const[err,setErr]=useState('');const setL=ch=>{setSf(o=>normLoc({...o,...ch}));setErr('')},set=(k,v)=>{setSf(o=>({...o,[k]:v}));setErr('')};
 const I=(k,l,t,ph)=>html`<div><label htmlFor=${'s-'+k}>${l}</label><input id=${'s-'+k} type=${t||'text'} min="0" placeholder=${ph||''} value=${sf[k]} onInput=${e=>set(k,e.target.value)}/></div>`;
 return html`<form onSubmit=${e=>{e.preventDefault();const dateErr=dateRangeError(sf.date,sf.dateTo);if(dateErr){setErr(dateErr);return}if(sf.guests&&!(N(sf.guests)>0)){setErr('Guest count must be greater than zero.');return}if(sf.budget&&!(N(sf.budget)>=0)){setErr('Budget must be zero or greater.');return}location.hash='#/explore?'+toQS(sf)}} aria-label="Venue search">
  <div className="sform">${I('q','Search city, area or venue','search','e.g. Baner, garden')}
   <div><label htmlFor="s-ev">Event type</label><select id="s-ev" value=${sf.event} onChange=${e=>set('event',e.target.value)}><option value="">Any event</option>${EVENTS.map(x=>html`<option key=${x}>${x}</option>`)}</select></div>
   ${html`<div><label htmlFor="s-date">Event date (from)</label><input id="s-date" type="date" min=${localDateISO()} value=${sf.date} onInput=${e=>set('date',e.target.value)}/></div>`}${html`<div><label htmlFor="s-dateTo">Date range (to)</label><input id="s-dateTo" type="date" min=${sf.date||localDateISO()} value=${sf.dateTo} onInput=${e=>set('dateTo',e.target.value)}/></div>`}${I('guests','Guest count','number','e.g. 300')}${I('budget','Total budget (₹)','number','e.g. 1000000')}</div>
  <details style=${{marginBottom:14}} open><summary style=${{fontWeight:800,cursor:'pointer',minHeight:36}}>Location</summary><div className="sform"><${LocationPicker} v=${sf} onChange=${setL} idp="hs"/></div></details>
  <button className="btn pri" type="submit">Search venues</button> <span className="muted" style=${{fontSize:'.82rem'}}>Dates are noted only. Availability isn’t checked.</span><p role="alert" style=${{color:'var(--warn)',fontWeight:700,minHeight:'1.5em',margin:'8px 0 0'}}>${err}</p></form>`}

function Section({title,sub,list,link,c,ctx,empty}){return html`<section style=${{marginTop:32}}><div style=${{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12,flexWrap:'wrap'}}><h2>${title}</h2>${link&&html`<a href=${'#/explore?'+link}>See all in Explore →</a>`}</div>${sub&&html`<p className="muted">${sub}</p>`}
 ${list.length?html`<${Grid} list=${list.slice(0,3)} c=${c} ctx=${ctx}/>`:html`<div className="empty"><p className="muted" style=${{margin:0}}>${empty||'No venues match yet.'}</p></div>`}</section>`}

function Discover({c}){
 const[sf,setSf]=useState({q:'',state:'',city:'',areas:[],nearby:false,event:'',date:'',dateTo:'',guests:'',budget:''});
 const ctx={guests:sf.guests,days:1,meals:1},bud=N(sf.budget);
 const within=bud?sortVenues(VENUES.filter(v=>locMatch(v,sf)&&(!N(sf.guests)||v.floatingCapacity>=+sf.guests)&&estimate(v,ctx).total<=bud),'rent'):[];
 const q=o=>toQS(o),by=(f,k)=>sortVenues(VENUES.filter(f),k);
 return html`<div>
 <section className="hero"><p className="tagline">The right venue. The right budget. No endless calls.</p><h1>Your perfect celebration starts here.</h1><p>Discover venues that match your guest list, location, style and budget.</p>
  <div style=${{display:'flex',gap:12,flexWrap:'wrap'}}><a className="btn pri" href="#/find-my-venue">Find My Venue</a><a className="btn" href="#/explore">Explore Venues</a></div>
  <${SearchForm} sf=${sf} setSf=${setSf}/>
  <div className="chips" role="group" aria-label="Venue categories">${CATS.map(([l])=>html`<a key=${l} className="chip" href=${'#/explore?'+q({cat:l})}>${l}</a>`)}</div></section>
 <${Section} title="Within Your Budget" sub=${bud?'Estimated totals at or below '+fmt(bud)+(sf.guests?' for '+sf.guests+' guests':'')+'. Unknown fees may raise them.':'Enter a total budget (and guest count) above to see venues within it.'} list=${within} c=${c} ctx=${ctx} link=${bud?q({budget:sf.budget,guests:sf.guests,state:sf.state,city:sf.city}):''} empty=${bud?'Nothing fits that budget in this location. Try a higher budget or a wider area.':'Your budget results will appear here.'}/>
 <${Section} title="Indoor + Outdoor Venues" sub="Hall and lawn in one place." list=${by(v=>v.indoorOutdoorType==='Indoor + Outdoor','cap')} link=${q({io:'Indoor + Outdoor'})} c=${c}/>
 <${Section} title="Large-Capacity Venues" sub="800+ floating guests." list=${by(v=>v.floatingCapacity>=800,'cap')} link=${q({guests:800})} c=${c}/>
 <${Section} title="Venues with Guest Rooms" sub="Stay on site." list=${by(v=>v.guestRooms>0,'rooms')} link=${q({rooms:true})} c=${c}/>
 <${Section} title="Best for Multi-Day Functions" sub="Support two or more event days." list=${sortVenues(VENUES.filter(v=>v.supportedEventDays>1),'cap').sort((a,b)=>b.supportedEventDays-a.supportedEventDays)} link=${q({multi:true})} c=${c}/>
 <${Section} title="Budget-Friendly Venues" sub="Venue rental ₹1,50,000 or less (known prices only)." list=${by(v=>v.venueRental!=null&&v.venueRental<=150000,'rent')} link=${q({maxRent:150000})} c=${c}/>
 <h2 style=${{marginTop:36}}>How it works</h2>
 <ol className="two" style=${{paddingLeft:20}}><li>Tell us where, what kind of event, how many guests and your budget.</li><li>Essentials such as capacity and location are hard rules. Everything else earns points.</li><li>Each result shows what matched, what didn’t and what’s unknown.</li></ol><${Disclaimer}/></div>`}

const DEF={q:'',state:'',city:'',areas:[],nearby:false,type:'',io:'',cat:'',event:'',date:'',dateTo:'',guests:'',maxGuests:'',basis:'floating',minSeated:'',minFloating:'',minIndoor:'',minOutdoor:'',minRent:'',maxRent:'',maxPlate:'',budget:'',days:'',minRooms:'',minHall:'',minLawn:'',minStageW:'',minStageD:'',...Object.fromEntries(FAC.map(x=>[x[0],false]))};
const PX={'Vaishali Nagar':[90,95],'C-Scheme':[215,75],'Malviya Nagar':[150,175],'Mansarovar':[70,255],'Jagatpura':[250,255],'Baner':[395,100],'Viman Nagar':[515,75],'Kharadi':[590,160],'Wakad':[410,235],'Hinjawadi':[530,285]};
function CityMap({f,res,setL}){const sel=f.areas;
 return html`<div className="map"><svg viewBox="0 0 660 340" role="group" aria-label="Illustrative locality sketch of Jaipur and Pune. Not geographically accurate.">
  <rect width="660" height="340" fill="var(--paper)"/>
  ${[[10,20,315,305,'JAIPUR','Jaipur'],[340,20,310,305,'PUNE','Pune']].map(([x,y,w,h,l,c])=>html`<g key=${l}><rect x=${x} y=${y} width=${w} height=${h} rx="18" fill="#A9C9F2" opacity=${!f.city||f.city===c?.5:.15}/><text x=${x+14} y=${y+22} fontSize="13" fontWeight="800" fill="var(--ink)">${l}</text></g>`)}
  ${Object.entries(NEAR).flatMap(([a,l])=>l.filter(b=>a<b).map(b=>html`<line key=${a+b} x1=${PX[a][0]} y1=${PX[a][1]} x2=${PX[b][0]} y2=${PX[b][1]} stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="5 6"/>`))}
  <text x="646" y="334" fontSize="11" fontWeight="700" fill="var(--muted)" textAnchor="end">ILLUSTRATIVE SKETCH · NOT TO SCALE · DASHED LINES = DEMO NEARBY LINKS</text>
  ${Object.keys(PX).map(a=>{const [x,y]=PX[a],[s,c]=AREAINFO[a],n=res.filter(v=>v.locality===a).length,on=sel.includes(a),dim=f.city&&f.city!==c,t=`${a} · ${n}`,w=Math.round(t.length*6.6+16),lx=Math.max(4,Math.min(x-w/2,656-w));
   const go=()=>setL({state:s,city:c,areas:f.city===c?(on?sel.filter(z=>z!==a):[...sel,a]):[a]});
   return html`<g key=${a} className="pin" opacity=${dim?.35:1} tabIndex="0" role="button" aria-pressed=${on} aria-label=${`${a}, ${c}: ${n} matching venues${on?' (selected)':''}`} onClick=${go} onKeyDown=${e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}}>
    ${on&&html`<circle cx=${x} cy=${y} r="19" fill="none" stroke="var(--accent)" strokeWidth="3"/>`}<circle cx=${x} cy=${y} r="11" fill=${n?'#FFD23F':'#ddd'} stroke="var(--ink)" strokeWidth="2.5"/>
    <rect x=${lx} y=${y+15} width=${w} height="22" rx="5" fill=${on?'#FFD23F':'var(--card)'} stroke="var(--ink)" strokeWidth="2"/><text x=${lx+w/2} y=${y+30} textAnchor="middle" fontSize="12" fontWeight="700" fill=${on?'#15171C':'var(--ink)'}>${t}</text></g>`})}
 </svg><p className="muted" style=${{margin:0,padding:'8px 14px',borderTop:'2px solid var(--ink)',fontSize:'.85rem'}}>Click a locality to filter by it. Counts reflect your current filters. This is an illustrative sketch, not a real map.</p></div>`}

function Explore({c,query}){
 const[f,setF]=useState(()=>normLoc({...DEF,...fromQS(query)}));const[sort,setSort]=useState('best');const[open,setOpen]=useState(false);
 const set=(k,v)=>setF(o=>({...o,[k]:v})),setL=ch=>setF(o=>normLoc({...o,...ch}));
 const res=useMemo(()=>sortVenues(filterVenues(VENUES,f),sort,f),[f,sort]);
 const dateErr=dateRangeError(f.date,f.dateTo);
 const act=Object.entries(f).filter(([k,v])=>!['q','basis','date','dateTo'].includes(k)&&(Array.isArray(v)?v.length:v));
 const clear=()=>setF({...DEF});
 const Nm=(k,l)=>html`<div><label htmlFor=${'f-'+k}>${l}</label><input id=${'f-'+k} type="number" min="0" inputMode="numeric" placeholder="Any" value=${f[k]} onInput=${e=>set(k,e.target.value)}/></div>`;
 const Sl=(k,l,opts)=>html`<div><label htmlFor=${'f-'+k}>${l}</label><select id=${'f-'+k} value=${f[k]} onChange=${e=>set(k,e.target.value)}><option value="">Any</option>${opts.map(o=>html`<option key=${o}>${o}</option>`)}</select></div>`;
 const Tg=(k,l)=>html`<button type="button" className="chip" aria-pressed=${!!f[k]} onClick=${()=>set(k,!f[k])}>${l}</button>`;
 const ctx={guests:f.guests,days:f.days||1,meals:1,rooms:f.rooms};
 return html`<div><h1>Explore Venues</h1>
 <div style=${{display:'flex',gap:8,marginBottom:16}}><div style=${{flex:1,display:'flex',gap:8}}><label className="sr" htmlFor="q">Search venues</label>
  <input id="q" type="search" placeholder="Search city, locality, venue name or event" value=${f.q} onInput=${e=>set('q',e.target.value)}/>${f.q&&html`<button className="btn" onClick=${()=>set('q','')} aria-label="Clear search">✕</button>`}</div>
  <button className="btn fbtn" aria-expanded=${open} aria-controls="filters" onClick=${()=>setOpen(!open)}>Filters${act.length?` (${act.length})`:''}</button></div>
 <div className="explore">
  <aside id="filters" className=${'filters'+(open?'':' closed')} aria-label="Filters">
   <details open><summary>Location</summary><div><${LocationPicker} v=${f} onChange=${setL} idp="ex"/></div></details>
   <details open><summary>Venue type</summary><div>${Sl('type','Venue type',TYPES)}${Sl('io','Indoor / outdoor',['Indoor','Outdoor','Indoor + Outdoor'])}${Sl('event','Event type',EVENTS)}${Sl('cat','Category',CATS.map(x=>x[0]))}</div></details>
   <details><summary>Capacity</summary><div><div><label htmlFor="f-basis">Guest basis</label><select id="f-basis" value=${f.basis} onChange=${e=>set('basis',e.target.value)}><option value="floating">Floating</option><option value="seated">Seated</option></select></div>${Nm('guests','Minimum guests')}${Nm('maxGuests','Maximum guests')}${Nm('minSeated','Min seated capacity')}${Nm('minFloating','Min floating capacity')}${Nm('minIndoor','Min indoor capacity')}${Nm('minOutdoor','Min outdoor capacity')}</div></details>
   <details><summary>Budget (₹)</summary><div>${Nm('minRent','Min venue rental')}${Nm('maxRent','Max venue rental')}${Nm('maxPlate','Max catering per plate')}${Nm('budget','Total estimated event budget')}<p className="muted" style=${{fontSize:'.8rem',margin:0}}>Rental and plate limits exclude venues where that price is unknown. The total budget uses known costs only, so it can be exceeded once unknown fees are confirmed.</p></div></details>
   <details><summary>Facilities</summary><div><div className="chips" role="group" aria-label="Facilities">${FAC.map(([k,l])=>html`<span key=${k}>${Tg(k,l)}</span>`)}</div>${Nm('minRooms','Minimum guest rooms')}${Nm('days','Event days needed')}</div></details>
   <details><summary>Space requirements</summary><div>${Nm('minHall','Min hall area (sq ft)')}${Nm('minLawn','Min lawn area (sq ft)')}${Nm('minStageW','Min stage width (ft)')}${Nm('minStageD','Min stage depth (ft)')}</div></details>
   <button className="btn" onClick=${clear} disabled=${!act.length&&!f.q}>Clear all</button></aside>
  <section aria-label="Results"><${CityMap} f=${f} res=${res} setL=${setL}/>
   <div style=${{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap',marginBottom:12}}>
    <p role=${dateErr?'alert':'status'} style=${{margin:0}}>${dateErr||html`<span><b>${res.length}</b> of ${VENUES.length} venues${f.date?' · date noted, availability not checked':''}</span>`}</p>
    <div><label className="sr" htmlFor="so">Sort by</label><select id="so" value=${sort} onChange=${e=>setSort(e.target.value)}><option value="best">Best match</option><option value="rent">Lowest venue rental</option><option value="total">Lowest estimated total cost</option><option value="cap">Highest capacity</option><option value="lawn">Largest lawn</option><option value="rooms">Most guest rooms</option></select></div></div>
   ${sort==='total'&&html`<p className="muted" style=${{fontSize:'.85rem'}}>Venues with fully known costs are listed before those with unknown fees.</p>`}
   ${res.length?html`<${Grid} list=${res} c=${c} ctx=${ctx}/>`:html`<div className="empty"><h2>No venues fit all of that.</h2><p className="muted">Relax a filter, widen the area or raise the budget. Unknown prices and measurements never count as a match.</p><button className="btn pri" onClick=${clear}>Clear all filters</button></div>`}
  </section></div><${Disclaimer}/></div>`}

const Row=(l,v)=>html`<div className="row"><span className="muted">${l}</span><b>${v}</b></div>`;
function Details({id,c,notify}){const v=VBY[id];const[g,setG]=useState('150');const[days,setDays]=useState('1');const[rooms,setRooms]=useState(false);const[sent,setSent]=useState(false);
 if(!v)return html`<${NotFound}/>`;
 const fav=c.favs.includes(v.id),inC=c.cmp.includes(v.id),e=estimate(v,{guests:g,days,meals:1,rooms}),inc=k=>(v.includedServices||[]).includes(k);
 const sa=stageArea(v),rt=ratio(v.hallAreaSqFt,v.lawnAreaSqFt),nd=N(days)||1;
 const share=async()=>{const t=`${v.name} (demo venue), ${v.type}, ${v.locality}, ${v.city}. ${num(v.floatingCapacity)} floating / ${num(v.seatedCapacity)} seated. ${rentalTxt(v)} (illustrative demo pricing). ${location.href}`;
  try{if(navigator.share)await navigator.share({title:v.name,text:t});else{await navigator.clipboard.writeText(t);notify('Venue summary copied')}}catch(x){if(x&&x.name==='AbortError')return;notify('Could not copy. Copy the address bar link instead.')}};
 const P=(label,k,amt,unit)=>{const i=k&&inc(k);return html`<div className="row"><span>${label}${unit?html`<span className="muted"> ${unit}</span>`:''}</span><span><span className=${'tag '+(i?'ok':amt==null?'warn':'')}>${i?'Included':amt==null?'Unknown':'Add-on'}</span> <b>${i?'—':fmt(amt)}</b></span></div>`};
 return html`<div><a href="#/explore">← Back to results</a>
 <div className="card static" style=${{marginTop:12,marginBottom:24}}><${VImg} v=${v} big=${true}/><div className="body"><${Crumb} v=${v}/><span className="tag gold">Demo venue · fictional</span><span className="tag">${v.type}</span><span className="tag">${v.indoorOutdoorType}</span><h1>${v.name}</h1><p>${v.description}</p>
  <p className="price" style=${{fontSize:'1.3rem'}}>${rentalTxt(v)} <span className="muted" style=${{fontSize:'.85rem',fontFamily:'DM Sans'}}>· illustrative demo pricing</span></p>
  <p className="muted">${num(v.floatingCapacity)} floating · ${num(v.seatedCapacity)} seated · ${v.availabilityStatus}. No date is confirmed.</p>
  <div className="acts" style=${{margin:0}}><button className="btn pri" aria-pressed=${fav} onClick=${()=>c.toggle(v)}>${fav?'♥ Saved':'♡ Save venue'}</button><button className="btn" aria-pressed=${inC} onClick=${()=>c.toggleCmp(v)}>${inC?'✓ In comparison':'+ Add to comparison'}</button><button className="btn" onClick=${share}>Share / copy summary</button><a className="btn" href=${'#/budget?venue='+v.id}>Open in Budget Planner</a></div></div></div>
 <div className="grid">
  <div className="card static"><div className="body"><h3>Space & dimensions</h3>${Row('Indoor hall area',v.hallAreaSqFt==null?'Unknown':num(v.hallAreaSqFt)+' sq ft')}${Row('Outdoor lawn area',v.lawnAreaSqFt==null?'Unknown':num(v.lawnAreaSqFt)+' sq ft')}${Row('Hall-to-lawn area ratio',rt||'Not available')}${Row('Stage (W × D)',v.stageWidthFt==null?'Not specified':v.stageWidthFt+' × '+v.stageDepthFt+' ft')}${Row('Stage area',sa==null?'Not available':num(sa)+' sq ft')}${Row('Dining area','Not specified')}${Row('Indoor capacity',num(v.indoorCapacity))}${Row('Outdoor capacity',num(v.outdoorCapacity))}<p className="muted" style=${{fontSize:'.8rem',margin:'8px 0 0'}}>The ratio compares floor area only, not guest capacity.</p></div></div>
  <div className="card static"><div className="body"><h3>Guest rooms</h3>${Row('Guest rooms',num(v.guestRooms))}${Row('Suites',num(v.suites))}${Row('Preparation rooms',num(v.preparationRooms))}${Row('Accommodation charges',v.guestRooms>0?fmt(v.accommodationCost)+(v.accommodationCost!=null?' (see notes)':''):'No rooms')}${Row('Accommodation included',v.guestRooms>0?(inc('accom')?'Yes':'No, charged separately'):'—')}</div></div>
  <div className="card static"><div className="body"><h3>Catering & logistics</h3>${Row('Per plate',v.cateringPricePerPlate==null?'Unknown':fmt(v.cateringPricePerPlate))}${Row('In-house catering',yn(v.inHouseCatering))}${Row('External caterer',yn(v.externalCateringAllowed))}${Row('Vegetarian',yn(v.vegetarianOptions))}${Row('Jain options',yn(v.jainOptions))}${Row('Parking',v.hasParking?(v.parkingCapacity?num(v.parkingCapacity)+' vehicles':'Yes'):yn(v.hasParking))}${Row('Generator / power backup',yn(v.hasGenerator))}${Row('AC',yn(v.hasAC))}${Row('Wheelchair accessible',yn(v.wheelchairAccessible))}</div></div>
  <div className="card static"><div className="body"><h3>Pricing (illustrative)</h3>${P('Venue rental',null,v.venueRental,v.rentalPricingModel==='perDay'?'per day':'per event')}${P('Catering','cat',v.cateringPricePerPlate==null?null:v.cateringPricePerPlate,'per plate')}${P('Decoration','deco',v.decorationCost)}${P('Stage','stage',v.stageCost)}${P('Lighting','stage',v.lightingCost)}${P('Sound / DJ','sound',v.soundCost)}${P('Logistics','logi',v.logisticsCost)}${v.guestRooms>0&&P('Accommodation','accom',v.accommodationCost)}
   <p className="muted" style=${{fontSize:'.8rem',margin:'8px 0 0'}}>Included = in the package. Add-on = optional extra. Unknown = not supplied, never treated as zero.</p>${v.extraCharges.length>0&&html`<p style=${{fontSize:'.88rem',marginTop:8}}><b>Extra charges:</b> ${v.extraCharges.join('; ')}</p>`}</div></div>
  <div className="card static"><div className="body"><h3>Multi-day events</h3>${Row('Supported event days',v.supportedEventDays)}${Row('Daily rental',v.rentalPricingModel==='perDay'?fmt(v.venueRental)+' per day':'Single price per event')}${v.rentalPricingModel==='perDay'&&v.venueRental!=null&&Row(v.supportedEventDays+' days of rental',fmt(v.venueRental*v.supportedEventDays))}${Row('Rooms for guests',v.guestRooms>0?v.guestRooms+' rooms':'None on site')}<p className="muted" style=${{fontSize:'.85rem'}}>${v.supportedEventDays>1?'Setup/teardown days and multi-day discounts are not supplied in demo data.':'This demo venue supports a single event day.'}</p></div></div>
  <div className="card static"><div className="body"><h3>Quick estimate</h3><div className="two" style=${{gap:8}}><div><label htmlFor="eg">Guests</label><input id="eg" type="number" min="0" value=${g} onInput=${x=>setG(x.target.value)}/></div><div><label htmlFor="ed">Event days</label><input id="ed" type="number" min="1" value=${days} onInput=${x=>setDays(x.target.value)}/></div></div>
   ${v.guestRooms>0&&html`<label className="chk"><input type="checkbox" checked=${rooms} onChange=${x=>setRooms(x.target.checked)}/>Add accommodation</label>`}
   <p className="big-n">${fmt(e.total)}${e.complete?'':'+'}</p><p className="muted" style=${{fontSize:'.85rem'}}>Estimate, not a quotation. ${e.complete?'All items known.':'Excludes unknown: '+e.unknown.join(', ').toLowerCase()+'.'} ${nd>v.supportedEventDays?'Warning: more days than this venue supports.':''}</p><a className="btn" href=${'#/budget?venue='+v.id}>Open full planner</a></div></div>
  <div className="card static"><div className="body"><h3>Demo enquiry</h3>${sent?html`<p role="status"><b>Demo enquiry recorded on this screen only.</b> Nothing was sent. This venue is fictional.</p>`:html`<form onSubmit=${x=>{x.preventDefault();setSent(true)}}><label htmlFor="en">Your name</label><input id="en" type="text" required/><label htmlFor="em" style=${{marginTop:8}}>Message</label><textarea id="em" defaultValue=${'Hello, I’d like to know more about '+v.name+'.'}></textarea><button className="btn pri" style=${{marginTop:10}} type="submit">Submit demo enquiry</button></form>`}</div></div>
 </div><${Disclaimer}/></div>`}

const STEPS=['Location','Event','Guests & space','Budget & facilities','Results'];
const BLANK={state:'',city:'',areas:[],nearby:false,event:'',date:'',dateTo:'',guests:'',basis:'floating',io:'any',minHall:'',minLawn:'',minStageW:'',budget:'',rent:'',rooms:'',days:'1',needs:{}};
const HARD=[['city','location'],['guests','guest count'],['budget','total budget'],['rent','venue rental budget'],['rooms','guest rooms'],['days','event days'],['minHall','minimum hall area'],['minLawn','minimum lawn area'],['minStageW','stage width']];
function Wizard({c}){
 const[step,setStep]=useState(0);const[p,setP]=useState(BLANK);const[err,setErr]=useState('');
 const up=o=>{setP(x=>({...x,...o}));setErr('')},setL=ch=>setP(x=>normLoc({...x,...ch}));
 const next=()=>{if(step===1&&!p.event)return setErr('Choose an event type to continue.');if(step===1){const dateErr=dateRangeError(p.date,p.dateTo);if(dateErr)return setErr(dateErr)}if(step===2&&!(N(p.guests)>0))return setErr('Enter your expected guest count.');if(step===2&&(N(p.minHall)!=null&&N(p.minHall)<0||N(p.minLawn)!=null&&N(p.minLawn)<0||N(p.minStageW)!=null&&N(p.minStageW)<0))return setErr('Space requirements cannot be negative.');if(step===3&&(N(p.budget)!=null&&N(p.budget)<0||N(p.rent)!=null&&N(p.rent)<0||N(p.rooms)!=null&&N(p.rooms)<0))return setErr('Budget and room requirements cannot be negative.');setStep(step+1)};
 const results=useMemo(()=>step===4?matchVenues(VENUES,p):[],[step,p]);
 const hints=useMemo(()=>{if(step!==4||results.length)return[];const h=[];HARD.forEach(([k,l])=>{const q={...p};if(k==='city'){q.state='';q.city='';q.areas=[]}else q[k]=k==='days'?'1':'';const n=matchVenues(VENUES,q).length;if(n&&((k==='city'&&p.city)||(k!=='city'&&N(p[k])!=null&&!(k==='days'&&p.days==='1'))))h.push([k,l,n])});
  NEEDS.forEach(k=>{if((p.needs[k])==='must'){const q={...p,needs:{...p.needs}};delete q.needs[k];const n=matchVenues(VENUES,q).length;if(n)h.push(['need:'+k,'must-have: '+FACF[k][1].toLowerCase(),n])}});return h},[step,results,p]);
 const Opt=({k,v,l,d,cur})=>html`<button type="button" role="radio" aria-checked=${cur===v} className="opt" onClick=${()=>up({[k]:v})}><b>${l}</b><span className="muted">${d||''}</span></button>`;
 const Nd=(k,l,ph)=>html`<div><label htmlFor=${'w-'+k}>${l}</label><input id=${'w-'+k} type="number" min="0" placeholder=${ph||'No preference'} value=${p[k]} onInput=${e=>up({[k]:e.target.value})}/></div>`;
 const Need=k=>{const l=FACF[k][1];return html`<div key=${k} className="need" role="radiogroup" aria-label=${l}><span>${l}</span><div className="seg">${[['','No preference'],['nice','Nice'],['must','Must']].map(([v,t])=>html`<button type="button" key=${t} role="radio" className="chip" aria-checked=${(p.needs[k]||'')===v} aria-pressed=${(p.needs[k]||'')===v} onClick=${()=>{const n={...p.needs};if(v)n[k]=v;else delete n[k];up({needs:n})}}>${t}</button>`)}</div></div>`};
 const FS={border:0,padding:0,margin:0};
 const Q=[html`<fieldset style=${FS}><legend><h2>Where is the celebration?</h2></legend><p className="muted">Leave blank if you’re not sure yet.</p><${LocationPicker} v=${p} onChange=${setL} idp="wz"/></fieldset>`,
 html`<fieldset style=${FS}><legend><h2>What are you celebrating?</h2></legend><div className="opts" role="radiogroup">${EVENTS.map(x=>html`<${Opt} key=${x} k="event" v=${x} l=${x} cur=${p.event}/>`)}</div><div className="two"><div><label htmlFor="w-date">Event date or start (optional)</label><input id="w-date" type="date" min=${localDateISO()} value=${p.date} onInput=${e=>up({date:e.target.value})}/></div><div><label htmlFor="w-dt">End date for multi-day (optional)</label><input id="w-dt" type="date" min=${p.date||localDateISO()} value=${p.dateTo} onInput=${e=>up({dateTo:e.target.value})}/></div></div><p className="muted" style=${{fontSize:'.85rem'}}>Dates are recorded only. Availability can’t be verified in this demo.</p></fieldset>`,
 html`<fieldset style=${FS}><legend><h2>Guests and space</h2></legend><div className="two">${Nd('guests','Expected guests','e.g. 400')}<div><label htmlFor="w-basis">Capacity type</label><select id="w-basis" value=${p.basis} onChange=${e=>up({basis:e.target.value})}><option value="floating">Floating (standing/mixed)</option><option value="seated">Seated dining</option></select></div></div>
  <h3 style=${{marginTop:16}}>Indoor, outdoor or both?</h3><div className="opts" role="radiogroup">${[['any','No preference'],['Indoor','Indoor'],['Outdoor','Outdoor'],['Both','Both']].map(([v,l])=>html`<${Opt} key=${v} k="io" v=${v} l=${l} cur=${p.io}/>`)}</div>
  <div className="two">${Nd('minHall','Minimum hall area (sq ft)')}${Nd('minLawn','Minimum lawn area (sq ft)')}${Nd('minStageW','Minimum stage width (ft)')}</div>${Need('stage')}</fieldset>`,
 html`<fieldset style=${FS}><legend><h2>Budget and facilities</h2></legend><div className="two">${Nd('budget','Total event budget (₹)')}${Nd('rent','Venue rental budget (₹)')}${Nd('rooms','Guest rooms needed (0 or blank = not needed)')}<div><label htmlFor="w-days">Event days</label><select id="w-days" value=${p.days} onChange=${e=>up({days:e.target.value})}>${[1,2,3,4].map(d=>html`<option key=${d} value=${d}>${d}${d>1?' days':' day'}</option>`)}</select></div></div>
  <p className="muted">Must-haves remove venues that lack them. Nice-to-haves only add points. Unknown counts as not confirmed.</p>${['inhouse','external','veg','jain','parking','gen','access','ac'].map(Need)}</fieldset>`];
 return html`<div><h1>Find My Venue</h1>
 <ol className="steps" aria-label=${'Step '+(step+1)+' of 5: '+STEPS[step]}>${STEPS.map((s,i)=>html`<li key=${s} className=${i<=step?'on':''}/>`)}</ol><p className="muted">Step ${step+1} of 5 · ${STEPS[step]}</p>
 ${step<4?html`<div>${Q[step]}<p role="alert" style=${{color:'var(--warn)',fontWeight:700,minHeight:'1.5em'}}>${err}</p>
  <div style=${{display:'flex',gap:8}}><button className="btn" disabled=${step===0} onClick=${()=>setStep(step-1)}>Back</button><button className="btn pri" onClick=${next}>${step===3?'Show matches':'Next'}</button></div></div>`
 :html`<div><div style=${{display:'flex',gap:8,flexWrap:'wrap',marginBottom:16}}><button className="btn" onClick=${()=>setStep(3)}>Adjust answers</button><button className="btn" onClick=${()=>{setP(BLANK);setStep(0)}}>Start over</button></div>
  <p role="status"><b>${results.length}</b> match${results.length===1?'':'es'} for a ${p.event.toLowerCase()} of ${p.guests} guests${p.city?' in '+p.city:''}. Results use your must-haves first, then rank the remaining matches by fit.</p>
  ${results.length?html`<div className="grid">${results.map(r=>html`<${VenueCard} key=${r.v.id} v=${r.v} fav=${c.favs.includes(r.v.id)} toggle=${c.toggle} cmp=${c.cmp} toggleCmp=${c.toggleCmp} est=${r.est}>
   <div><b className="match-b">${r.label} ${r.pct}%</b><div className="bar" aria-hidden="true"><span style=${{width:r.pct+'%'}}/></div>
   <p style=${{marginBottom:0,fontSize:'.88rem'}}>Location: <b>${p.city?(r.lm==='exact'?'matches':'nearby area'):'no preference'}</b>${r.ft?html` · Facilities: <b>${r.fm}/${r.ft}</b> confirmed`:''}</p>
   <p style=${{marginBottom:0}}>Why it fits:</p><ul className="reasons">${r.why.map(w=>html`<li key=${w}>${w}</li>`)}</ul>
   ${r.miss.length>0&&html`<p className="muted" style=${{fontSize:'.85rem',marginTop:6}}>Trade-offs: ${r.miss.join('; ')}.</p>`}${r.unk.length>0&&html`<p style=${{fontSize:'.85rem',marginTop:6,color:'var(--warn)'}}>Unknown / unconfirmed: ${r.unk.join('; ')}.</p>`}</div><//>`)}</div>`
  :html`<div className="empty"><h2>No venue meets every hard requirement</h2>${hints.length?html`<p className="muted">These are the most restrictive constraints. Relaxing any one of them would give results:</p><ul style=${{textAlign:'left',display:'inline-block'}}>${hints.map(([k,l,n])=>html`<li key=${k}>Relax <b>${l}</b>: ${n} venue${n>1?'s':''}</li>`)}</ul>`:html`<p className="muted">No single change fixes this. Try widening location and budget together.</p>`}<p><button className="btn pri" onClick=${()=>setStep(2)}>Adjust requirements</button></p></div>`}</div>`}
 <${Disclaimer}/></div>`}

function Compare({c}){
 const[g,setG]=useState({guests:'200',days:'1',meals:'1',rooms:false,ref:''});const set=(k,v)=>setG(o=>({...o,[k]:v}));
 const list=c.cmp.map(id=>VBY[id]).filter(Boolean);
 if(!list.length)return html`<div><h1>Compare Venues</h1><div className="empty"><h2>Nothing to compare yet</h2><p className="muted">Add up to four venues with the Compare button on any venue card.</p><a className="btn pri" href="#/explore">Explore Venues</a></div></div>`;
 const ctx={guests:g.guests,days:g.days,meals:g.meals,rooms:g.rooms},E=Object.fromEntries(list.map(v=>[v.id,estimate(v,ctx)]));
 const it=(v,k)=>E[v.id].items.find(x=>x.k===k),itx=x=>x.state==='included'?'Included':x.state==='unknown'?'Unknown':x.state==='excluded'?'Not added':fmt(x.cost);
 const R=(l,show,raw,dir)=>({l,show,raw,dir});
 const rows=[['Location'],R('City',v=>v.city),R('Area',v=>v.locality),R('Nearby-area match',v=>{if(!g.ref)return'Pick a reference area above';const m=locMatch(v,{areas:[g.ref],nearby:true});return m==='exact'?'Same area':m==='nearby'?'Nearby (demo link)':'Not linked as nearby'}),
 ['Capacity'],R('Floating',v=>num(v.floatingCapacity),v=>v.floatingCapacity,'max'),R('Seated',v=>num(v.seatedCapacity),v=>v.seatedCapacity,'max'),R('Indoor',v=>num(v.indoorCapacity),v=>v.indoorCapacity,'max'),R('Outdoor',v=>num(v.outdoorCapacity),v=>v.outdoorCapacity,'max'),
 ['Space'],R('Hall area',v=>v.hallAreaSqFt==null?'Unknown':num(v.hallAreaSqFt)+' sq ft',v=>v.hallAreaSqFt,'max'),R('Lawn area',v=>v.lawnAreaSqFt==null?'Unknown':num(v.lawnAreaSqFt)+' sq ft',v=>v.lawnAreaSqFt,'max'),R('Stage',v=>v.stageWidthFt==null?'Unknown':v.stageWidthFt+' × '+v.stageDepthFt+' ft'),R('Hall : lawn ratio',v=>ratio(v.hallAreaSqFt,v.lawnAreaSqFt)||'—'),
 ['Accommodation'],R('Guest rooms',v=>num(v.guestRooms),v=>v.guestRooms,'max'),R('Suites',v=>num(v.suites)),R('Preparation rooms',v=>num(v.preparationRooms)),
 ['Pricing (illustrative)'],R('Venue rental',v=>rentalTxt(v)),R('Per plate',v=>v.cateringPricePerPlate==null?'Unknown':fmt(v.cateringPricePerPlate),v=>v.cateringPricePerPlate,'min'),R('Est. catering',v=>itx(it(v,'cat'))),R('Decoration',v=>itx(it(v,'deco'))),R('Stage & lighting',v=>itx(it(v,'stage'))),R('Sound / DJ',v=>itx(it(v,'sound'))),R('Logistics',v=>itx(it(v,'logi'))),R('Accommodation',v=>v.guestRooms>0?itx(it(v,'accom')):'No rooms'),
 R('Estimated total',v=>fmt(E[v.id].total)+(E[v.id].complete?'':' + unknown'),v=>E[v.id].complete?E[v.id].total:null,'min'),R('Unknown fees',v=>E[v.id].unknown.join(', ')||'None'),
 ['Facilities'],R('Type',v=>v.indoorOutdoorType),R('AC',v=>yn(v.hasAC)),R('Parking',v=>v.hasParking?(v.parkingCapacity?num(v.parkingCapacity)+' vehicles':'Yes'):yn(v.hasParking)),R('Generator',v=>yn(v.hasGenerator)),R('Catering',v=>[v.inHouseCatering&&'In-house',v.externalCateringAllowed&&'External allowed',v.vegetarianOptions&&'Veg',v.jainOptions&&'Jain'].filter(Boolean).join(', ')||'Unknown'),R('Accessible',v=>yn(v.wheelchairAccessible)),R('Multi-day',v=>v.supportedEventDays>1?v.supportedEventDays+' days':'Single day')];
 const allKnown=fn=>list.every(v=>fn(v)!=null),pick=(fn,dir)=>{const vals=list.map(fn),t=dir==='max'?Math.max(...vals):Math.min(...vals);return list.filter(v=>fn(v)===t)};
 const sums=[];if(list.length>1){const hc=pick(v=>v.floatingCapacity,'max');sums.push('Highest floating capacity: '+hc.map(v=>v.name).join(', '));
  sums.push(allKnown(v=>v.lawnAreaSqFt)?'Largest lawn: '+pick(v=>v.lawnAreaSqFt,'max').map(v=>v.name).join(', '):'Largest lawn: can’t be named, some lawn areas are unknown');
  sums.push(list.every(v=>E[v.id].complete)?'Lowest estimated total: '+pick(v=>E[v.id].total,'min').map(v=>v.name).join(', ')+' ('+fmt(Math.min(...list.map(v=>E[v.id].total)))+')':'Lowest total can’t be named: '+list.filter(v=>!E[v.id].complete).map(v=>v.name).join(', ')+' have unknown fees')}
 return html`<div><h1>Compare Venues</h1><p className="muted">Up to four venues. Left bar marks rows where venues differ; shaded cells are the best value when all values are known.</p>
 <div className="card static" style=${{marginBottom:20}}><div className="body"><div className="sform" style=${{margin:0}}>
  <div><label htmlFor="c-g">Guests</label><input id="c-g" type="number" min="0" value=${g.guests} onInput=${e=>set('guests',e.target.value)}/></div><div><label htmlFor="c-d">Event days</label><input id="c-d" type="number" min="1" value=${g.days} onInput=${e=>set('days',e.target.value)}/></div><div><label htmlFor="c-m">Catering services</label><input id="c-m" type="number" min="1" value=${g.meals} onInput=${e=>set('meals',e.target.value)}/></div>
  <div><label htmlFor="c-r">Reference area (nearby check)</label><select id="c-r" value=${g.ref} onChange=${e=>set('ref',e.target.value)}><option value="">None</option>${Object.keys(AREAINFO).map(a=>html`<option key=${a}>${a}</option>`)}</select></div>
  <label className="chk"><input type="checkbox" checked=${g.rooms} onChange=${e=>set('rooms',e.target.checked)}/>Include accommodation in totals</label></div>
  ${sums.length>0&&html`<ul style=${{margin:'12px 0 0',paddingLeft:18}}>${sums.map(s=>html`<li key=${s}>${s}</li>`)}</ul>`}</div></div>
 <div className="cmp" tabIndex="0" role="region" aria-label="Venue comparison table"><table><thead><tr><th scope="col"><span className="sr">Feature</span></th>${list.map(v=>html`<th key=${v.id} scope="col"><a href=${'#/venue/'+v.id}>${v.name}</a><br/><button className="btn" style=${{minHeight:32,padding:'0 8px',fontSize:'.8rem',marginTop:6}} onClick=${()=>c.toggleCmp(v)} aria-label=${'Remove '+v.name+' from comparison'}>Remove ✕</button></th>`)}</tr></thead><tbody>
 ${rows.map((r,i)=>{if(!r.l)return html`<tr key=${i} className="sec"><th colSpan=${list.length+1} scope="colgroup">${r[0]}</th></tr>`;
  const cells=list.map(r.show),diff=new Set(cells).size>1;let best=null;
  if(r.raw&&diff&&allKnown(r.raw))best=r.dir==='max'?Math.max(...list.map(r.raw)):Math.min(...list.map(r.raw));
  return html`<tr key=${i} className=${diff?'diff':''}><th scope="row">${r.l}</th>${list.map((v,j)=>html`<td key=${v.id} className=${best!=null&&r.raw(v)===best?'best':''}>${cells[j]}</td>`)}</tr>`})}</tbody></table></div>
 <p className="note">Totals are illustrative estimates from demo data, never quotations. “+ unknown” means some fees were not supplied, so the real cost is higher.</p></div>`}

const BL={venueId:'',guests:'200',days:'1',meals:'1',plate:'',rental:'',rentalModel:'perEvent',deco:'',decoPerDay:false,stage:'',sound:'',accom:'',logi:'',logiPerDay:false,other:'',cont:'10',budget:'',incl:{}};
const s0=x=>x==null?'':String(x);
function fromVenue(v,b){const i=vIn(v,{guests:b.guests,days:b.days,meals:b.meals,rooms:v.guestRooms>0});return{...b,venueId:v.id,plate:s0(i.plate),rental:s0(i.rental),rentalModel:i.rentalModel||'perEvent',deco:s0(i.deco),stage:s0(i.stage),sound:s0(i.sound),accom:s0(i.accom),logi:s0(i.logi),incl:i.incl}}
function Budget({query,est,setEst,notify}){
 const qp=new URLSearchParams(query);
 const[b,setB]=useState(()=>{const e=est.find(x=>x.id===qp.get('est'));if(e)return{...BL,...e.inputs};const v=VBY[qp.get('venue')];return v?fromVenue(v,BL):BL});
 const set=o=>setB(x=>({...x,...o}));const v=VBY[b.venueId];const r=calcCost(b);const bud=nonNegative(b.budget);
 const F=(k,l)=>html`<div><label htmlFor=${'b-'+k}>${l}</label><input id=${'b-'+k} type="number" min="0" inputMode="numeric" placeholder="Unknown / blank" value=${b[k]} onInput=${e=>set({[k]:e.target.value})}/></div>`;
 const Inc=k=>html`<label className="chk"><input type="checkbox" checked=${!!b.incl[k]} onChange=${e=>set({incl:{...b.incl,[k]:e.target.checked}})}/>Included in venue package (don’t add)</label>`;
 const save=()=>{setEst(l=>[{id:String(Date.now()),name:(v?v.name:'Custom')+' estimate',venueId:b.venueId,total:Math.round(r.total),savedAt:new Date().toISOString().slice(0,10),inputs:b},...l].slice(0,10));notify('Estimate saved')};
 const left=bud!=null?bud-r.total:null;
 return html`<div><h1>Budget Planner</h1><p className="muted">Change any value and the estimate updates immediately. Blank means unknown and is excluded, never counted as zero.</p>
 <div className="two" style=${{alignItems:'start'}}>
 <div className="card static"><div className="body" style=${{display:'grid',gap:12}}>
  <div><label htmlFor="b-v">Venue (optional, prefills prices)</label><select id="b-v" value=${b.venueId} onChange=${e=>{const x=VBY[e.target.value];x?setB(o=>fromVenue(x,o)):set({venueId:''})}}><option value="">Custom (no venue)</option>${VENUES.map(x=>html`<option key=${x.id} value=${x.id}>${x.name}, ${x.city}</option>`)}</select></div>
  <div className="two" style=${{gap:10}}>${F('guests','Guest count')}${F('days','Event days')}${F('meals','Catering services / meals')}${F('plate','Price per plate (₹)')}</div>${Inc('cat')}
  <div className="two" style=${{gap:10}}>${F('rental','Venue rental (₹)')}<div><label htmlFor="b-rm">Rental pricing model</label><select id="b-rm" value=${b.rentalModel} onChange=${e=>set({rentalModel:e.target.value})}><option value="perEvent">One price per event</option><option value="perDay">Per day (× days)</option></select></div></div>
  ${v&&b.days&&N(b.days)>v.supportedEventDays&&html`<p role="alert" style=${{color:'var(--warn)',fontWeight:700,margin:0}}>${v.name} supports ${v.supportedEventDays} day${v.supportedEventDays>1?'s':''} in demo data.</p>`}
  ${F('deco','Decoration (₹)')}<label className="chk"><input type="checkbox" checked=${b.decoPerDay} onChange=${e=>set({decoPerDay:e.target.checked})}/>Charged per day</label>${Inc('deco')}
  ${F('stage','Stage & lighting (₹)')}${Inc('stage')}${F('sound','Sound / DJ (₹)')}${Inc('sound')}${F('accom','Accommodation (₹)')}${Inc('accom')}
  ${F('logi','Transport & logistics (₹)')}<label className="chk"><input type="checkbox" checked=${b.logiPerDay} onChange=${e=>set({logiPerDay:e.target.checked})}/>Charged per day</label>${Inc('logi')}
  <div className="two" style=${{gap:10}}>${F('other','Other costs (₹)')}${F('cont','Contingency (%)')}</div>${F('budget','Your total budget (₹)')}
  <div style=${{display:'flex',gap:8,flexWrap:'wrap'}}><button className="btn pri" onClick=${save}>Save estimate</button><button className="btn" onClick=${()=>setB(BL)}>Reset</button></div></div></div>
 <div style=${{display:'grid',gap:16}}><div className="card static"><div className="body"><h3>Estimated total</h3><p className="big-n">${fmt(r.total)}${r.complete?'':'+'}</p>
  ${bud!=null&&html`<p style=${{fontWeight:700,color:left<0?'#D63A22':'var(--ok)'}}>${left<0?'Over budget by '+fmt(-left):'Budget remaining: '+fmt(left)}</p><div className=${'bar'+(left<0?' over':'')} aria-hidden="true"><span style=${{width:Math.min(100,r.total/bud*100)+'%'}}/></div><p className="muted" style=${{fontSize:'.85rem'}}>${Math.round(r.total/bud*100)}% of budget used</p>`}
  ${Row('Cost per guest',r.g?fmt(r.total/r.g):'Needs guest count')}${Row('Cost per day',fmt(r.total/r.d))}${Row('Subtotal',fmt(r.sub))}${Row('Contingency ('+(N(b.cont)||0)+'%)',fmt(r.cont))}
  ${!r.complete&&html`<p style=${{color:'var(--warn)',fontSize:'.88rem',marginTop:8}}>Excludes unknown: ${r.unknown.join(', ')}. The real total will be higher.</p>`}
  <p className="muted" style=${{fontSize:'.8rem'}}>An estimate from your inputs, not a confirmed quotation.</p></div></div>
 <div className="card static"><div className="body"><h3>Itemised breakdown</h3>${r.items.map(x=>html`<div key=${x.k} className="row"><span>${x.label}<br/><span className="muted" style=${{fontSize:'.78rem'}}>${x.basis}</span></span><span style=${{textAlign:'right'}}><span className=${'tag '+(x.state==='included'?'ok':x.state==='unknown'?'warn':'')}>${x.state==='estimated'?'Estimated':x.state==='included'?'Included':x.state==='unknown'?'Unknown':'Not added'}</span><br/><b>${x.state==='estimated'?fmt(x.cost):'—'}</b></span></div>`)}</div></div>
 <div className="card static"><div className="body"><h3>Saved estimates</h3><${EstList} est=${est} setEst=${setEst}/></div></div></div></div><${Disclaimer}/></div>`}
function EstList({est,setEst}){return est.length?html`<div>${est.map(e=>html`<div key=${e.id} className="row"><span><a href=${'#/budget?est='+e.id+'&x='+e.id}>${e.name}</a><br/><span className="muted" style=${{fontSize:'.78rem'}}>${e.savedAt}</span></span><span><b>${fmt(e.total)}</b> <button className="btn" style=${{minHeight:32,padding:'0 8px'}} aria-label=${'Delete '+e.name} onClick=${()=>setEst(l=>l.filter(x=>x.id!==e.id))}>✕</button></span></div>`)}</div>`:html`<p className="muted">No saved estimates yet.</p>`}

function Saved({c,est,setEst}){const list=VENUES.filter(v=>c.favs.includes(v.id));
 return html`<div><h1>Saved Venues</h1>${list.length?html`<${Grid} list=${list} c=${c}/>`:html`<div className="empty"><h2>Your shortlist is empty</h2><p className="muted">Tap the heart on a venue and it lands here.</p><a className="btn pri" href="#/explore">Explore Venues</a></div>`}
 <h2 style=${{marginTop:32}}>Saved budget estimates</h2><div className="card static"><div className="body"><${EstList} est=${est} setEst=${setEst}/></div></div><${Disclaimer}/></div>`}
function NotFound(){return html`<div className="empty"><h1>Page not found</h1><p className="muted">That page or venue doesn’t exist. Try one of the sections in the menu.</p><a className="btn pri" href="#/">Back to Discover</a> <a className="btn" href="#/explore">Explore Venues</a></div>`}

function App(){
 const h=useHash();const[path,query='']=h.split('?');
 const[favs,setFavs]=useStored(FAV_KEY,[],v=>Array.isArray(v)?v.filter(id=>VBY[id]):null);
 const[cmp,setCmp]=useStored(CMP_KEY,[],v=>Array.isArray(v)?[...new Set(v.filter(id=>VBY[id]))].slice(0,4):null);
 const[est,setEst]=useStored(EST_KEY,[],v=>Array.isArray(v)?v.filter(e=>e&&typeof e.id==='string'&&e.inputs&&typeof e.total==='number').slice(0,10):null);
 const[theme,setTheme]=useState(()=>store.get(THEME_KEY,null));
 useEffect(()=>{const r=document.documentElement;if(theme)r.setAttribute('data-theme',theme);else r.removeAttribute('data-theme');if(theme)store.set(THEME_KEY,theme)},[theme]);
 const dark=theme?theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
 const tb=html`<button className="btn" onClick=${()=>setTheme(dark?'light':'dark')} aria-label=${dark?'Switch to light theme':'Switch to dark theme'}>${dark?'Light':'Dark'} mode</button>`;const[toast,setToast]=useState('');
 const notify=useCallback(m=>{setToast(m);clearTimeout(notify.t);notify.t=setTimeout(()=>setToast(''),2500)},[]);
 const toggle=useCallback(v=>{const on=favs.includes(v.id);setFavs(f=>on?f.filter(i=>i!==v.id):[...f,v.id]);notify(on?'Removed from saved venues':'Saved '+v.name)},[favs]);
 const toggleCmp=useCallback(v=>{if(cmp.includes(v.id)){setCmp(l=>l.filter(i=>i!==v.id));notify('Removed from comparison')}else if(cmp.length>=4)notify('Comparison is full (4 venues). Remove one first.');else{setCmp(l=>[...l,v.id]);notify('Added to comparison ('+(cmp.length+1)+'/4)')}},[cmp]);
 const c={favs,toggle,cmp,toggleCmp};
 let page,title='VenueWise';
 if(path==='/'){page=html`<${Discover} c=${c}/>`}
 else if(path==='/explore'){page=html`<${Explore} key=${query} c=${c} query=${query}/>`;title='Explore Venues'}
 else if(path==='/find-my-venue'){page=html`<${Wizard} c=${c}/>`;title='Find My Venue'}
 else if(path==='/compare'){page=html`<${Compare} c=${c}/>`;title='Compare Venues'}
 else if(path==='/budget'){page=html`<${Budget} key=${query} query=${query} est=${est} setEst=${setEst} notify=${notify}/>`;title='Budget Planner'}
 else if(path==='/saved'){page=html`<${Saved} c=${c} est=${est} setEst=${setEst}/>`;title='Saved Venues'}
 else if(path.startsWith('/venue/')&&VBY[path.slice(7)]){page=html`<${Details} key=${path} id=${path.slice(7)} c=${c} notify=${notify}/>`;title=VBY[path.slice(7)].name}
 else{page=html`<${NotFound}/>`;title='Page not found'}
 useEffect(()=>{document.title=title==='VenueWise'?'VenueWise – Find the right venue for your perfect celebration':title+' · VenueWise'},[title]);
 return html`<div className="app"><a className="sr" href="#main" onClick=${e=>{e.preventDefault();document.getElementById('main').focus()}}>Skip to content</a>
 <aside className="side"><a className="logo" href="#/">VenueWise</a><${Nav} path=${path} cls="nav" cmpN=${cmp.length}/><div style=${{marginTop:'auto',marginBottom:12}}>${tb}</div><p className="muted" style=${{fontSize:'.8rem'}}>The right venue. The right budget. No endless calls.</p></aside>
 <div><main id="main" tabIndex="-1" className="main"><div className="top"><a className="logo" href="#/">VenueWise</a>${tb}</div>${page}</main></div>
 <${Nav} path=${path} cls="bnav" mobile=${true} cmpN=${cmp.length}/>
 <div role="status" aria-live="polite">${toast&&html`<div className="toast">${toast}</div>`}</div></div>`}
ReactDOM.createRoot(document.getElementById('root')).render(html`<${App}/>`);
