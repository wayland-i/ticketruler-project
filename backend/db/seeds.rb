puts "🌱 Seeding spices..."


Show.destroy_all
Ticket.destroy_all
User.destroy_all
Show.reset_pk_sequence
Ticket.reset_pk_sequence
User.reset_pk_sequence

Show.create(show_name: "Wilco")
Show.create(show_name: "Lady Gaga")
Show.create(show_name: "AC/DC")
Show.create(show_name: "Lil Nas X")
Show.create(show_name: "Ariana Grande")



puts "✅ Done seeding!"
