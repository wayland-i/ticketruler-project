puts "🌱 Seeding spices..."


Show.destroy_all
Ticket.destroy_all
User.destroy_all
Show.reset_pk_sequence
Ticket.reset_pk_sequence
User.reset_pk_sequence

Show.create(show_name: "Wilco Tour", show_time: '2022-06-24 19:00:00', musician: "Wilco", tickets_left: 150, image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Wilco_MassMoca_AustinNelson.png')
Show.create(show_name: "Lady Gaga Tour", show_time: '2022-06-28 22:00:00', musician: "Lady Gaga", tickets_left: 100, image_url: 'https://img.vggcdn.net/img/cat/14908/2/17.jpg')
Show.create(show_name: "AC/DC", show_time: '2022-07-6 21:30:00', musician: "AC/DC", tickets_left: 125, image_url: 'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/acdc-10025-04F-JC-white-group_4607.jpg')
Show.create(show_name: "Lil Nas X", show_time: '2022-07-12 18:00:00', musician: "Lil Nas X", tickets_left: 50, image_url: 'https://s1.ticketm.net/dam/a/bfb/b1205651-b0fb-478d-8c8b-16820ca8bbfb_1673971_TABLET_LANDSCAPE_LARGE_16_9.jpg')
Show.create(show_name: "Ariana Grande", show_time: '2022-07-18 22:30:00', musician: "Ariana Grande", tickets_left: 75, image_url: 'https://helios-i.mashable.com/imagery/articles/02mQGmVXZUsWIo86L8SDhOs/hero-image.fill.size_1248x702.v1619019357.png')
Show.create(show_name: "Eric Clapton", show_time: '2022-07-24 22:00:00', musician: "Eric Clapton", tickets_left: 100, image_url: 'https://m.media-amazon.com/images/I/71e+9LJeQJL._SL1425_.jpg')
Show.create(show_name: "Black Eyed Peas", show_time: '2022-07-28 20:30:00', musician: "Black Eyed Peas", tickets_left: 75, image_url: 'https://media.gq-magazine.co.uk/photos/5d13a362b6fee97a3bc9f821/master/pass/BEP_GQ_2Sep2016_youtube_b.jpg')
Show.create(show_name: "Dua Lipa", show_time: '2022-08-01 17:30:00', musician: "Dua Lipa", tickets_left: 50, image_url: 'https://s1.ticketm.net/dam/a/29d/209fd13b-6314-4ee8-bb43-b0820eedc29d_1557161_TABLET_LANDSCAPE_LARGE_16_9.jpg')
Show.create(show_name: "Drake", show_time: '2022-08-07 20:30:00', musician: "Drake", tickets_left: 75, image_url: 'https://variety.com/wp-content/uploads/2021/09/Drake-publicity2-2021.jpg?w=681&h=383&crop=1')
Show.create(show_name: "Ed Sheeran", show_time: '2022-08-12 20:00:00', musician: "Ed Sheeran", tickets_left: 12, image_url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6')
Show.create(show_name: "Justin Bieber", show_time: '2022-08-16 16:00:00', musician: "Justin Bieber", tickets_left: 20, image_url: 'https://dynamicmedia.livenationinternational.com/Media/d/h/l/1f0ba3b9-fce7-49e2-a189-fc300525d3f2.png')
Show.create(show_name: "Bad Bunny", show_time: '2022-08-20 20:00:00', musician: "Bad Bunny", tickets_left: 40, image_url: 'https://media1.houstonpress.com/hou/imager/u/magnum/12880658/hou_mus_20220216_badbunny_marcotorres_0003h800.jpg?cb=1645106332')
Show.create(show_name: "Taylor Swift", show_time: '2022-08-24 20:00:00', musician: "Taylor Swift", tickets_left: 12, image_url: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iisr9KlJAbds/v2/-1x-1.jpg')


User.create(full_name: 'Ryan Woodruff', email: "something@gmail.com", password:"asdfghjk" )
User.create(full_name: 'Ian Iversen', email: "whatever@gmail.com", password:"passw0rd")
User.create(full_name: 'Jonathon Bialas', email: "jonathon@gmail.com", password:"Cackle1")
User.create(full_name: 'John Smith', email: "john@gmail.com", password:"frito2")
User.create(full_name: 'Thomas Brown', email: "thomas@gmail.com", password:"portlamb14")

Ticket.create(price: 100, show_id: 1, user_id: 1, party_size: 3)
Ticket.create(price: 200, show_id: 2, user_id: 1, party_size: 1)
Ticket.create(price: 150, show_id: 3, user_id: 2, party_size: 4)
Ticket.create(price: 125, show_id: 4, user_id: 3, party_size: 2)
Ticket.create(price: 100, show_id: 5, user_id: 4, party_size: 8)
Ticket.create(price: 120, show_id: 5, user_id: 2, party_size: 9)
Ticket.create(price: 115, show_id: 1, user_id: 5, party_size: 6)
Ticket.create(price: 90, show_id: 13, user_id: 3, party_size: 4)
Ticket.create(price: 115, show_id: 12, user_id: 5, party_size: 9)
Ticket.create(price: 110, show_id: 11, user_id: 4, party_size: 6)
Ticket.create(price: 80, show_id: 10, user_id: 1, party_size: 3)
Ticket.create(price: 75, show_id: 9, user_id: 2, party_size: 6)
Ticket.create(price: 115, show_id: 8, user_id: 3, party_size: 9)
Ticket.create(price: 185, show_id: 7, user_id: 3, party_size: 6)
Ticket.create(price: 100, show_id: 6, user_id: 2, party_size: 7)
Ticket.create(price: 55, show_id: 5, user_id: 5, party_size: 6)
Ticket.create(price: 200, show_id: 13, user_id: 2, party_size: 9)




puts "✅ Done seeding!"
