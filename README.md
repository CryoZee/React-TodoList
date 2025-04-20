This is my first React project.

Through this little project, I have learned something:
1.before coding, I should have a map in my mind: how my website page look like?
2.then decompose the entire page into some components. Then make them.
3.index.html->main.jsx->App.jsx, that is how my work show at the brower.
4."import" make my little components could be set in any page.
5."state" has an amazing character: when it changed, the hold page will be draw again. So it can be used to record some change, such as a input.
6.useState() return an array, include two item. They like two function: getter and setter.
7.use props to transfer the data. And the props contain the hold part in the start point. Such like: <List item={item} onhandleClick={onhandleClick} />,
that "props.item" could be marked as the first data tranfered.
8.pay more attention to onclick={onclick()}, that will make a loop. Because that onclick() run directly, sometime it would set a state that will make the
page draw again, and that make the function run.

These is what I want to record. Hope I will be better.
