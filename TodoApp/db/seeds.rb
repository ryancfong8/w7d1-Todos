# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create!({title: "Clean Room", body: "Clean entire room", done: "false"})
Todo.create!({title: "Wash Dishes", body: "Clean up all the plates", done: "true"})
Todo.create!({title: "Do homework", body: "Finish Assignment 5", done: "false"})
