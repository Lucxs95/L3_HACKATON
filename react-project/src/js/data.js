export const hotels = [
    {
        id: 1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
        location: "Private room in center of London",
        label : "blind",
        title:"Stay at this spacious Edwardian House",
        description:"1 guest · 1 bedroom · 1 bed · Adapted for blind people",
        star: 4.73,
        price:"30€ / night",
        total:"117€ total", // In the final project we calculate the price with the value of days indicate by the customers
    },
    {
        id: 2,
        img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
        location:"Private room in center of London",
        label : "wheelchair",
        title:"Independant luxury studio apartment",
        description:"2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Adapted for physical disability",
        star: 4.3,
        price:"40€ / night",
        total:"157€ total",
    },
    {
        id: 3,
        img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",
        location:"Simple room in center of London",
        label : "deaf",
        title:"30 mins to Oxford Street, Excel London",
        description:"1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi ·Silent and simple room especially adapted for mental disability",
        star: 4.1,
        price:"55€ / night",
        total:"320€ total",
    },
];

export const buttons = [
    {
        name: "All",
        value: "all"
      },
    {
      name: "Wheelchair",
      value: "wheelchair"
    },
    {
      name: "Blind",
      value: "blind"
    },
    {
      name: "Deaf",
      value: "deaf"
    },
  ];