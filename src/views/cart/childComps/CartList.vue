<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :product="item" :key="item.iid"></cart-list-item>
    <ul>
      <li>li1</li>
      <li>li2</li>
      <li>li3</li>
      <li>li4</li>
      <li>li5</li>
      <li>li6</li>
      <li>li7</li>
      <li>li8</li>
      <li>li9</li>
      <li>li10</li>
      <li>li11</li>
      <li>li12</li>
      <li>li13</li>
      <li>li14</li>
      <li>li15</li>
      <li>li16</li>
      <li>li17</li>
      <li>li18</li>
      <li>li19</li>
      <li>li20</li>
      <li>li21</li>
      <li>li22</li>
      <li>li23</li>
      <li>li24</li>
      <li>li25</li>
      <li>li26</li>
      <li>li27</li>
      <li>li28</li>
      <li>li29</li>
      <li>li30</li>
      <li>li31</li>
      <li>li32</li>
      <li>li33</li>
      <li>li34</li>
      <li>li35</li>
      <li>li36</li>
      <li>li37</li>
      <li>li38</li>
      <li>li39</li>
      <li>li40</li>
      <li>li41</li>
      <li>li42</li>
      <li>li43</li>
      <li>li44</li>
      <li>li45</li>
      <li>li46</li>
      <li>li47</li>
      <li>li48</li>
      <li>li49</li>
      <li>li50</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem },
  computed: {
    ...mapGetters(['cartList']),
  },
}
</script>

<style lang="less" scoped>
.cart-list {
  background-color: rgb(233, 232, 232);
  padding: 10px;
}
</style>
