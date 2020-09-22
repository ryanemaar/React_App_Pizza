import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';

const App =() => {
  return (
  <>
    <HeaderBlock title="Лучшая пицца во всем городе!"/>
    <HeaderBlock descr="Быстрая доставка и только свежие ингредиенты!" 
    hideBackground
    />
    <ContentBlock content_title="Не человек выбирает пиццу, а пицца человека (с)" content_text="Факт: в 1905 году в Нью-Йорке была открыта первая пиццерия, в которой появился собственный рецепт, получивший название «американская» или «Нью-Йоркская пицца». Отличительной особенностью этой лепешки выступают приподнятые края, которые позволяют использовать еще большее количество начинки. Теперь этот рецепт не менее популярен чем оригинальный."/>
    <FooterBlock footer_copyright="Сверстала Софья Пащенко по урокам Зара Захарова. Все права защищены. 2020"/>
  </>
  );
}

export default App;
