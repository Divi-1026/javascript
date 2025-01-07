const form = document.querySelector('form');
const result = document.getElementById('result');

const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];

const compliments = [
    "You have a brilliant mind!",
    "Your kindness is contagious!",
    "You are a natural leader!",
    "Your creativity is inspiring!",
    "You have a heart of gold!",
    "Your smile brightens up the room!",
    "You are incredibly thoughtful!",
    "Your positivity is infectious!",
    "You are a great listener!",
    "You have an amazing sense of humor!",
    "Your determination is admirable!",
    "You are a true friend!",
    "Your generosity knows no bounds!",
    "You are a ray of sunshine!",
    "You have a wonderful perspective on life!",
    "Your honesty is refreshing!",
    "You are full of great ideas!",
    "You make people feel special!",
    "Your confidence is inspiring!",
    "You bring out the best in others!",
    "You are incredibly resilient!",
    "Your curiosity is amazing!",
    "You have a strong sense of justice!",
    "You have a beautiful soul!",
    "You are so reliable and trustworthy!",
    "Your enthusiasm is contagious!",
    "You are always full of surprises!",
    "You have a fantastic sense of style!",
    "You are a quick learner!",
    "You radiate warmth and care!",
    "You make the world a better place!"
];
const victimCardCompliments = [
    "You are stronger than you think!",
    "Your courage is inspiring!",
    "You handle challenges with grace.",
    "Your perseverance is unmatched!",
    "You have an unbreakable spirit!",
    "You deserve all the good in the world.",
    "Your strength is a beacon of hope.",
    "You face adversity like a true warrior.",
    "Your resilience is extraordinary!",
    "You have the heart of a lion.",
    "You’re a survivor, not a victim.",
    "You inspire others with your determination.",
    "Your bravery lights the way for others.",
    "You turn challenges into opportunities.",
    "You are the definition of resilience.",
    "You have the power to overcome anything.",
    "Your story is one of triumph.",
    "You are capable of amazing things.",
    "You rise every time you fall.",
    "Your strength and courage are limitless."
];
const dayPredictions = [
    "Today is going to be full of joy and surprises!",
    "You will accomplish something meaningful today.",
    "An exciting opportunity might come your way!",
    "Your energy and enthusiasm will inspire others.",
    "A peaceful and relaxing day is in store for you.",
    "Today is perfect for connecting with loved ones.",
    "You’ll solve a tricky problem with ease today.",
    "Expect some pleasant news to brighten your day.",
    "You will find clarity in a situation that puzzled you.",
    "A small act of kindness will bring you great joy.",
    "Today is ideal for starting something new.",
    "Your hard work will start to pay off today.",
    "You’ll discover a hidden talent or skill today.",
    "Luck is on your side—make the most of it!",
    "A chance encounter will leave you smiling.",
    "You’ll feel a strong sense of accomplishment today.",
    "Creative ideas will flow effortlessly for you.",
    "You’ll find the motivation to tackle a big task.",
    "Your positive attitude will attract good vibes.",
    "Someone will appreciate your efforts today.",
    "A surprise will remind you how much you're loved.",
    "Today, you’ll feel more confident and self-assured.",
    "You’ll make progress toward an important goal.",
    "A small gesture will make a big difference today.",
    "Today is perfect for self-care and rejuvenation.",
    "You’ll rediscover a passion or hobby you enjoy.",
    "A challenge will turn into an exciting opportunity.",
    "Your optimism will spread to those around you.",
    "You’ll feel a deep sense of peace and gratitude today.",
    "Something unexpected will make you laugh heartily.",
    "You’ll end the day with a sense of fulfillment."
];

const dailyRecommendations = [
    "Take a walk in nature to refresh your mind.",
    "Call a loved one and catch up on life.",
    "Spend time journaling about your thoughts and goals.",
    "Try a new recipe and cook something special.",
    "Read a chapter of a book you’ve been meaning to start.",
    "Declutter a small space in your home.",
    "Take a break and listen to your favorite music.",
    "Try a 10-minute meditation to find your inner calm.",
    "Set small, achievable goals for the day.",
    "Learn something new—watch a tutorial or read an article.",
    "Plan your week to stay organized and productive.",
    "Spend time doing a creative activity like drawing or writing.",
    "Practice gratitude by listing three things you’re thankful for.",
    "Do a random act of kindness for someone else.",
    "Try a new workout or stretch routine to energize yourself.",
    "Organize your digital life—clean up your email or phone.",
    "Watch an inspiring or educational video.",
    "Spend some quiet time reflecting on your achievements.",
    "Write a letter or email to someone who inspires you.",
    "Take care of your plants or start a mini garden.",
    "Explore a new podcast or audiobook.",
    "Make a vision board for your future goals.",
    "Treat yourself to something you’ve been craving.",
    "Volunteer your time or help someone in need.",
    "Try a mindfulness activity like deep breathing exercises.",
    "Revisit an old hobby or pick up a new one.",
    "Plan a fun outing or activity for the weekend.",
    "Spend time organizing your finances or budget.",
    "Watch the sunset and reflect on the day.",
    "Set a self-care day with your favorite activities.",
    "Create a playlist of songs that make you happy."
];
const futurePredictions = [
    "You’ll soon achieve a goal you’ve been working hard for.",
    "A long-awaited opportunity is just around the corner.",
    "Your efforts will be recognized by someone important.",
    "A positive change is coming in your personal life.",
    "You’ll meet someone who will inspire you in unexpected ways.",
    "Financial prosperity is in your near future.",
    "You’ll discover a hidden strength you didn’t know you had.",
    "A significant breakthrough will happen in your career or studies.",
    "You’ll embark on an exciting journey that will change your perspective.",
    "A heartfelt conversation will strengthen an important relationship.",
    "You’ll soon find clarity in a situation that feels confusing now.",
    "A new hobby or interest will bring you immense joy.",
    "Your hard work will lead to surprising rewards.",
    "You’ll experience a wave of creativity that will lead to success.",
    "Someone from your past will bring positive news or opportunities.",
    "You’ll overcome a challenge that has been holding you back.",
    "A serendipitous event will brighten your life soon.",
    "A significant improvement in your health and well-being is coming.",
    "You’ll find the courage to pursue something you’ve been dreaming of.",
    "A financial or material gain will come your way unexpectedly.",
    "You’ll form a meaningful connection with someone new.",
    "An upcoming event will bring you immense happiness.",
    "Your leadership skills will shine in an important situation.",
    "You’ll make a choice that positively changes your future.",
    "A long-forgotten wish will come true unexpectedly.",
    "You’ll feel a surge of confidence that propels you forward.",
    "A mentor or guide will appear to help you on your path.",
    "You’ll soon celebrate a significant milestone in your life.",
    "A creative idea you’ve had will turn into something extraordinary.",
    "You’ll find a perfect balance between work and personal life.",
    "Happiness and peace will fill your life in ways you never expected."
];
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Name=document.getElementById('name').value ;
    const sirname=document.getElementById('surname').value;
    const date=document.getElementById('date').value ;
    const month=document.getElementById('month').value;
    const year=document.getElementById('year').value ;
     
    const fullname=Name+sirname;
    const index=fullname.length%dailyRecommendations.length;

    let val1=dailyRecommendations[index];
    let val2=futurePredictions[date-1];
    let val3=dayPredictions[month-1];
    let val4=compliments[year%compliments.length];
    let val5=victimCardCompliments[(date+month)%victimCardCompliments.length];

    result.innerHTML=`${val4}<br>${val5}<br> ${val3} <br> ${val1} <br> ${val2}`;
    result.style.color="white";

 })


