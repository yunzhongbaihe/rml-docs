# 组件
### 工具类js
```js
const getYearMonthDay = (date) => {
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	day = day < 10 ? '0' + day : day;
	return {year, month, day};
};

const getDate = (year, month, day) => {
	return new Date(year, month, day);
};

export {
	getYearMonthDay,
	getDate
};
```
### 1、日期选择
```vue
<!-- <DatePicker v-model="now"></DatePicker> -->
<template>
    <div>
        <p>日历组件</p>
        <div class="date-picker-wrap" v-click-outside>
            <input type="text" :value="formatDate" :readonly="readonly" :disabled="disabled"/>
            <div class="pannel" v-if="isVisible">
                <div class="pannel-nav">
                    <span title="上一年" @click="prevYear">&lt;</span>
                    <span title="上一月" @click="prevMonth">&lt;&lt;</span>
                    <span>{{time.year}}年</span>
                    <span>{{time.month + 1}}月</span>
                    <span title="下一月" @click="nextMonth">&gt;&gt;</span>
                    <span title="下一年" @click="nextYear">&gt;</span>
                </div>
                <div class="pannel-content">
                    <div class="days">
                        <div class="weeks">
                            <span v-for="j in 7"
                                :key="`_`+j" class="cell">{{weekDays[j-1]}}</span>
                        </div>
                        <div v-for="i in 6" :key="i">
                        <span
                            v-for="j in 7" :key="j"
                            class="cell cell-days"
                            @click="chooseDate(getCellDate(i,j))"
                            :class="[
                                {notCurrentMonth: !isCurrentMonth(getCellDate(i,j))},
                                {today: isToday(getCellDate(i,j))},
                                {select: isSelect(getCellDate(i,j))},
                            ]"
                        >{{getCellDate(i,j).getDate()}}</span>
                        </div>
                    </div>
                </div>
                <!--<div class="pannel-footer">今天</div>-->
            </div>
        </div>
    </div>
</template>

<script>
	import * as utils from './util';

	export default {
		name: 'DatePicker',
		props: {
			value: {
				type: Date,
				default: () => new Date()
			},
			readonly: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
		},
		data(){
			let {year, month} = utils.getYearMonthDay(this.value);
			return {
				isVisible: false, // 是否显示日期选择面板
				weekDays: ['日', '一', '二', '三', '四', '五', '六'],
				time: {year, month},
			}
		},
		computed: {
			formatDate(){
				let {year, month, day} = utils.getYearMonthDay(this.value);
				month = month + 1;
				month = month < 10 ? '0' + month : month;
				return `${year}-${month}-${day}`;
			},
			visibleDays(){
				let {year, month} = utils.getYearMonthDay(
                    utils.getDate(this.time.year, this.time.month, 1)
                );
				let currentFirstDay = utils.getDate(year, month, 1);
				let week = currentFirstDay.getDay(); // 每月1号是周几
				let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24; // 当前开始天数
				let arr = [];
				for(let i = 0; i < 42; i++){
					arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
				}
				return arr;
			}
		},
		methods: {
			focus(){
				this.isVisible = true;
			},
			blur(){
				this.isVisible = false;
            },
            // 是否是当前月
			isCurrentMonth(date){
				let {year, month} = utils.getYearMonthDay(
                    utils.getDate(this.time.year, this.time.month, 1)
                );
				let {year: y, month: m} = utils.getYearMonthDay(date);
				return year === y && month === m;
            },
            // 是否是今天
			isToday(date){
				let {year, month, day} = utils.getYearMonthDay(new Date());
				let {year: y, month: m, day: d} = utils.getYearMonthDay(date);
				return year === y && month === m && day === d;
            },
            // 选择日期
			chooseDate(date){
				this.time = utils.getYearMonthDay(date);
				this.$emit('input', date);
				this.blur();
            },
            // 是否选中
			isSelect(date){
				let {year, month, day} = utils.getYearMonthDay(this.value);
				let {year: y, month: m, day: d} = utils.getYearMonthDay(date);
				return year === y && month === m && day === d;
            },
            // 上一月
			prevMonth(){
				let d = utils.getDate(this.time.year, this.time.month, 1);
				d.setMonth(d.getMonth() - 1);
				this.time = utils.getYearMonthDay(d);
            },
            // 下一月
			nextMonth(){
				let d = utils.getDate(this.time.year, this.time.month, 1);
				d.setMonth(d.getMonth() + 1);
				this.time = utils.getYearMonthDay(d);
            },
            // 上一年
			prevYear(){
				let d = utils.getDate(this.time.year, this.time.month, 1);
				d.setFullYear(d.getFullYear() - 1);
				this.time = utils.getYearMonthDay(d);
            },
            // 下一年
			nextYear(){
				let d = utils.getDate(this.time.year, this.time.month, 1);
				d.setFullYear(d.getFullYear() + 1);
				this.time = utils.getYearMonthDay(d);
			},
			getCellDate(i, j){
				return this.visibleDays[(i - 1) * 7 + (j - 1)];
			}
        },
        // 自定义指令(使用 v-指令名称 方式绑定)
		directives: {
			clickOutside: {
				bind(el, bindings, vnode){
					let handler = (e) => {
						if(el.contains(e.target)){
							if(!vnode.context.isVisible){
								vnode.context.focus();
							}
						}else{
							if(vnode.context.isVisible){
								vnode.context.blur();
							}
						}
					};
					el.handler = handler;
					document.addEventListener('click', handler);
				},
				unbind(el){
					document.removeEventListener('click', el.handler);
				}
			}
		}
	}
</script>

<style scoped>
    .date-picker-wrap {
        position: relative;
        width: calc(32px * 7 + 2px);
    }

    .date-picker-wrap * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .date-picker-wrap input {
        padding: 11px 10px;
        width: 100%;
        outline: none;
        border: 1px solid #E6E6E6;
        color: #555555;
        line-height: 14px;
        font-size: 14px;
    }

    .date-picker-wrap .pannel {
        position: absolute;
        left: 0;
        top: 39px;
        border: 1px solid #E6E6E6;
        width: 100%;
        font-size: 12px;
        background: #fff;
        z-index: 10;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

    .date-picker-wrap .pannel-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30px;
    }

    .date-picker-wrap .pannel-nav span {
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .date-picker-wrap .cell {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
    }

    .date-picker-wrap .cell-days:hover,
    .date-picker-wrap .select {
        color: #0088EE;
        cursor: pointer;
    }

    .date-picker-wrap .pannel-footer {
        height: 30px;
        text-align: center;
    }

    .date-picker-wrap .notCurrentMonth {
        color: #C0C4CC;
    }

    .date-picker-wrap .today,
    .date-picker-wrap .today:hover {
        color: #f00;
    }

    .date-picker-wrap .weeks {
        border-bottom: 1px solid #E6E6E6;
    }
</style>
```