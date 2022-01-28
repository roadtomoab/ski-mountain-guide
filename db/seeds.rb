# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Mountain.destroy_all
User.destroy_all
Rating.destroy_all
Favorite.destroy_all

puts "Seeding mountains..."
Mountain.create!([
    {
        summary: "Telluride has long been a recognizable destination name to most skiers, but it remains a white whale for many. It shouldn’t. The town’s old bones, tracing to the time when Telluride was a mining outpost, make for a striking foreground against the backdrop of a seemingly vertical box canyon whose upper walls reflect the sun an hour before rays hit the street in town.  Telluride doesn’t leave much uncovered on the skiing front, either. Experts will love the steepness of the Gold Hill chutes and the pure fall lines that descend straight into town. Intermediates can find plenty of blue terrain all over Mountain Village and beginners will revel in prolonged groomers such as Galloping Goose, which stretches on for 4.6 miles. More expert fodder can be had off the Prospect Lift, including the most unique in-bounds skiing in North America: a chute that descends from near the top of Palmyra Peak.",
        pass_info: "Epic Pass",
        avg_snowfall: 209,
        best_for: "serious skiers",
        name: "Telluride",
        image_url: "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2020/11/ge1bhg-1.jpg"
    },
    {
        summary: "A name that has always been synonymous with extreme skiing, Jackson has made major changes on its mountain to make it more beginner and intermediate friendly. There still remains room to roam in this Northwest corner of Wyoming, however, which is used to even larger crowds in the summer that gather to travel through Grand Teton and Yellowstone National Parks. Jackson’s epicurean scene has continued to ascend, with steady standbys supplemented by edgy newcomers each season.",
        pass_info: "Ikon Pass",
        avg_snowfall: 406,
        best_for: "skiers of all types",
        name: "Jackson Hole",
        image_url: "https://www.planetware.com/photos-large/USWY/usa-wyoming-jackson-hole-grand-teton-national-park.jpg"

    },
    {
        summary: "Steamboat calls itself Ski Town USA, and it just might be. This venerable ski resort has been soaking Colorado storms for powder since 1963, and the area’s skiing roots are intertwined with those of America. Steamboat receives more snow than any other major destination resort in Colorado. This year is not proving an exception, as the ski mountain has been layered in white since mid-November. Holiday season skiers this year were treated to 100% of the mountain being open with nary a rock in sight.",
        pass_info: "Ikon Pass",
        avg_snowfall: 262,
        best_for: "skiers of all types",
        name: "Steamboat",
        image_url: "https://coloradomtn.edu/wp-content/uploads/2020/01/steamboat-downtown-ski-areas-dusk.jpg"
    },
    {
        summary: "For the purposes of this piece, we are going to treat Alta-Snowbird as one destination, even though each resort has its distinctions, including: Alta can only be legally accessed by skiers—sorry snowboarders; and Snowbird has a tram that treats skiers (and snowboarders) to all of the resort’s considerable vertical in one straight shot up the mountain. For snow seekers, Alta/Snowbird has always been hallowed ground, as the slopes here gather snow better than those of any other ski resort in North America. Join those superlative conditions with terrain that is only matched by a few other resorts and skiers will always find an indelible experience in Utah’s Little Cottonwood Canyon.",
        pass_info: "Ikon Pass",
        avg_snowfall: 409,
        best_for: "skiers of all types",
        name: "Snowbird / Alta",
        image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/92/6d/f2/aerial-view-of-snowbird.jpg?w=900&h=-1&s=1"
    },
    {
        summary: "Many people don’t realize that there are four ski resorts in and around the town of Aspen that comprise the entirety of the Aspen ski experience: Aspen Mountain, Aspen Highlands, Buttermilk, and Aspen Snowmass. Couple all of that great skiing with a town that is amongst the best in skiing and Aspen presents one of the best all-around ski trip experiences on the continent.",
        pass_info: "Ikon Pass",
        avg_snowfall: 277,
        best_for: "skiers of all types",
        name: "Aspen Snowmass",
        image_url: "https://www.aspensnowmass.com/-/media/aspen-snowmass/images/homepage-hero/homepage-hero-image/winter/2021-22/hompage-hero-20210909.ashx?mw=752&mh=464&hash=FB68CDEA97961C63E6364E1D01D61E7F"
    },
    {
        summary: "The resort that has come to define skiing for so many remains a flagship of not only its parent company, Vail Resorts, but also of the state of Colorado, the default destination for most skiers. Vail combines a superlative skiing experience that is huge—more than 5,000 acres—with a base that includes lodging and dining options that run the entire scale. Vail has terrain to satisfy nearly any skier and has one of the stronger snow profiles in the entire state. ",
        pass_info: "Epic Pass",
        avg_snowfall: 232,
        best_for: "skiers of all types",
        name: "Vail",
        image_url: "https://www.skimag.com/wp-content/uploads/2021/10/GettyImages-1205033759-scaled.jpg"
    },
    {
        summary: "The largest resort in North America offers skiers not only a big skiing experience, but also one of the best village scenes in skiing. At some point during the last couple of decades, Whistler’s village reached an après level commensurate with resorts in Austria—where the partying starts hard at 4 p.m. and continues that way into the next day. Not that all skiers at Whistler have to party, but those looking for that kind of game will find it here in the coastal range of British Columbia.",
        pass_info: "Epic Pass",
        avg_snowfall: 322,
        best_for: "skiers of all types",
        name: "Whistler-Blackcomb",
        image_url: "https://tahoequarterly.com/wp-content/uploads/2019/11/B20201017_villageatnight_02.jpg"
    },    
    {
        summary: "Montana’s sections of the Rockies always seem a bit bigger, a bit more untamed, than other spots along the continental divide. Big Sky offers skiers an area befitting its name, with 5,800 skiable acres, the third most in North America. Compared with the other three resorts with more than 5,000 acres—Whistler, Park City and Vail—Big Sky almost never has a crowd. Lift lines here aren’t really a thing. Experts will love the unique ride up to Lone Peak on a small tram that gives them a crack at a couloir that requires true skill to descend. Big Sky’s trump card, however, is its appeal to intermediates. It has a wide expanse of blue runs that unroll down the apron of Lone Peak at steady, unintimidating angles. Skiers can often pull up, look around, and realize there isn’t another skier for hundreds of yards. That’s the charm of Montana. ",
        pass_info: "Ikon Pass",
        avg_snowfall: 258,
        best_for: "skiers of all types",
        name: "Big Sky",
        image_url: "https://www.visitbigsky.com/sites/default/files/styles/scale_1440/public/2021-05/beneminger-Instagram-1559-ig-17915714473404475.jpg?itok=yK3c7xWA"
    }
])

puts "Seeding users..."
User.create!([
    {
        username: "noahblum",
        password_digest: "123",
        email: "noah.blumenstein@gmail.com"
    },
    {
        username: "mrbean",
        password_digest: "123",
        email: "mrbean"
    },
    {
        username: "earthisflat",
        password_digest: "123",
        email: "earthisflat"
    },
    {
        username: "bobby",
        password_digest: "123",
        email: "bobby"
    }
])

puts "Seeding ratings..."
Rating.create!([
    {
        town_rating: 8.2,
        ski_rating: 7.5,
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        town_rating: 9.2,
        ski_rating: 6.5,
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        town_rating: 5.2,
        ski_rating: 9.7,
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        town_rating: 3.5,
        ski_rating: 8.7,
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        town_rating: 5.0,
        ski_rating: 6.9,
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        town_rating: 8.2,
        ski_rating: 7.5,
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    }
])

puts "Seeding favorites..."
Favorite.create([
    {
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..8),
        user_id: rand(1..4)
    }
])