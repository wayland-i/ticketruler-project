puts "🌱 Seeding spices..."


Show.destroy_all
Ticket.destroy_all
User.destroy_all
Show.reset_pk_sequence
Ticket.reset_pk_sequence
User.reset_pk_sequence

Show.create(show_name: "Wilco Tour", show_time: '2022-06-24', musician: "Wilco", tickets_left: 150)
Show.create(show_name: "Lady Gaga Tour", show_time: '2022-06-28', musician: "Lady Gaga", tickets_left: 100)
Show.create(show_name: "AC/DC", show_time: '2022-07-6', musician: "AC/DC", tickets_left: 125)
Show.create(show_name: "Lil Nas X", show_time: '2022-07-12', musician: "Lil Nas X", tickets_left: 50)
Show.create(show_name: "Ariana Grande", show_time: '2022-07-18', musician: "Ariana Grande", tickets_left: 75)

User.create(full_name: 'Ryan Woodruff', email: "something@gmail.com")
User.create(full_name: 'Ian Iversen', email: "whatever@gmail.com")
User.create(full_name: 'Jonathon Bialas', email: "jonathon@gmail.com")
User.create(full_name: 'John Smith', email: "john@gmail.com")
User.create(full_name: 'Thomas Brown', email: "thomas@gmail.com")

Ticket.create(price: 100, show_id: 1, user_id: 1, party_size: 3)
Ticket.create(price: 200, show_id: 2, user_id: 1, party_size: 1)
Ticket.create(price: 150, show_id: 3, user_id: 2, party_size: 4)
Ticket.create(price: 125, show_id: 4, user_id: 3, party_size: 2)
Ticket.create(price: 100, show_id: 5, user_id: 4, party_size: 8)
Ticket.create(price: 120, show_id: 5, user_id: 2, party_size: 9)
Ticket.create(price: 115, show_id: 1, user_id: 5, party_size: 6)




puts "✅ Done seeding!"
