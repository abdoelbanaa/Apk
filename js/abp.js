/*<![CDATA[*/"undefined"!=typeof xAo&&(getid("AudioBookPlayer").innerHTML="<div id='playerWrp' :data-show-list=\"(show_list) ? 'true' : 'false'\" :data-show-info=\"(show_info) ? 'true' : 'false'\"><div id='rpef-ls' :class=\"{active: show_list == true}\"></div><div class='toolbar'><div id='rpef-inf' :class=\"{active: show_info == true}\"></div><div id='close' :class=\"{show: show_list == true || show_info == true}\" @click='show_list = false; show_info = false'><svg viewBox=\"0 0 320 512\"><path d=\"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z\"/></svg></div><div class='list-icon' @click='show_list = !show_list' v-if='show_list == false && show_info == false'><svg viewBox=\"0 0 512 512\"><path d=\"M31.97 255.1h224.1C273.7 255.1 288 241.7 288 224s-14.32-32.02-31.97-32.02H31.97C14.32 191.1 0 206.3 0 223.1S14.32 255.1 31.97 255.1zM31.97 127.1h224.1C273.7 127.1 288 113.6 288 95.99c0-17.65-14.32-32.01-31.97-32.01H31.97C14.32 63.98 0 78.31 0 95.97S14.32 127.1 31.97 127.1zM128 319.1H31.97C14.32 319.1 0 334.3 0 351.1s14.32 32.02 31.97 32.02H128C145.7 383.1 160 369.7 160 352S145.7 319.1 128 319.1zM471 1.323l-96.63 28.5C361.1 33.95 352 46.33 352 60.33v299.7c-15.5-5.251-31.62-8.001-48-8.001c-61.88 0-112 35.88-112 80.01S242.1 512 304 512s112-35.88 112-80.01V148.1l73-21.38C502.6 122.7 512 110.2 512 95.96V31.96c0-10.13-4.75-19.64-12.88-25.64C491.1 .323 480.6-1.552 471 1.323z\"/></svg></div><div class='info-icon' @click='show_info = !show_info' v-if='show_list == false && show_info == false'><svg viewBox=\"0 0 512 512\"><path d=\"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z\"/></svg></div></div><div class='inf-cont'><div class='inf-wrp' v-html='arBookPlayer.list_audio[audio_index].desc'></div></div><div class='plyls-cont'><div class='ls-cont'><div class='list-item' v-for='(c, i) in arBookPlayer.list_audio' @click='audio_index = i' :class=\"{active: audio_index == i}\"><div class='loading' v-if='is_loading == true'></div><div class=\"ttl\">{{c.name}}</div><div class='meta'><span class=''>{{c.artist}}</span><span class=''>{{c.duration}}</span></div></div></div></div><div class='plyr-cont'><div class=\"ttl-container\"><div class=\"ttl\">{{arBookPlayer.title}}</div><div class=\"author\">{{arBookPlayer.list_audio[audio_index].artist}}</div></div><div class=\"cover-wrp\"><div class='prev-next'><div class='prev' :class=\"{disabled: audio_index <= 0}\" @click='playPrev'><svg viewBox=\"0 0 512 512\"><path d=\"M459.5 71.41l-171.5 142.9v83.45l171.5 142.9C480.1 457.7 512 443.3 512 415.1V96.03C512 68.66 480.1 54.28 459.5 71.41zM203.5 71.41L11.44 231.4c-15.25 12.87-15.25 36.37 0 49.24l192 159.1c20.63 17.12 52.51 2.749 52.51-24.62v-319.9C255.1 68.66 224.1 54.28 203.5 71.41z\"/></svg></div><div class='next' :class=\"{disabled: audio_index >= arBookPlayer.list_audio.length - 1}\" @click='playNext'><svg viewBox=\"0 0 512 512\"><path d=\"M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z\"/></svg></div></div><spectrum :pins='normlizeAudioPins' v-on:avarage=\"updateAvarage($event)\"></spectrum><div class='cover' :style='coverArtTransition'><img :src=\"arBookPlayer.list_audio[audio_index].cover\"/></div></div><div class=\"chapter\">{{arBookPlayer.list_audio[audio_index].name}}</div><div class=\"audio-bar-wrap\"><div class=\"audio-bar-cont\" @mousedown='barClick'><div class=\"bar\" ref='bar'><span class='loading' v-if='is_loading == true'></span><span class='played' :style=\"{width:handlePosition}\"></span><span class='buffered' v-for='b in buffered' :style=\"{left: b.left, width: b.width}\"></span></div><div class=\"handle\" id='handle' :style=\"{left: handlePosition}\"></div></div><div class=\"time-cont\"><div class=\"current\">{{currentTime}}</div><div class=\"end\">{{endTime}}</div></div></div><div class='options'><div class='speed' @click=\"toggleSpeed\"> {{speed}}x </div><div class='repeat' @click=\"repeat = !repeat\" :class=\"{active: repeat == true}\"><svg viewBox=\"0 0 512 512\"><path d=\"M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z\"/></svg></div><div class=\"auto-playlist\" @click=\"list_play = !list_play\" :class=\"{active: list_play == true}\"><svg viewBox=\"0 0 24 24\"><path d=\"M14.016 14.016l4.969 3-4.969 3v-6zM3.984 14.016h8.016v1.969h-8.016v-1.969zM3.984 6h12v2.016h-12v-2.016zM3.984 9.984h12v2.016h-12v-2.016z\"></path></svg></div></div><div class='controls'><div class=\"dec-minute\" @click=\"moveAudio('decrease', '60')\" :class='{inactive: current_time < 60}'>-1m</div><div class=\"dec-seconds\" @click=\"moveAudio('decrease', '30')\" :class='{inactive: current_time < 30}'>-30s</div><div class=\"play-pause\" @click='playAudio()'><svg v-if='is_playing == false' viewBox=\"0 0 512 512\"><path d=\"M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z\"/></svg><svg v-if='is_playing == true' viewBox=\"0 0 320 512\"><path d=\"M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z\"/></svg></div><div class=\"inc-seconds\" @click=\"moveAudio('increase', '30')\" :class='{inactive: leftTime < 30}'>+30s</div><div class=\"inc-minute\" @click=\"moveAudio('increase', '60')\" :class='{inactive: leftTime < 60}'>+1m</div></div></div><div id='err-box' :class=\"{show: is_error == true}\">{{this.error_msg}}</div></div>",getid("AudioBookPlayer").insertAdjacentHTML("afterend",'<template id="spectrum-tmp"><svg id="spectrum"><polygon x="0" y="0" :points="points"></polygon></svg></template>'),arBookPlayer.pos_fixed&&addCt(getid("playerWrp"),"fxd"),Vue.component("spectrum",{template:"#spectrum-tmp",props:["pins"],data:function(){return{radius:50,adjust:0,avarage:0,cover_art:null}},mounted:function(){const i=this.$el.getBoundingClientRect().width,t=100*i/130;this.adjust=(i-t)/2,this.radius=t/2},methods:{valueToPoint:function(i,t){let s=360*t/this.total-90;return s=s*Math.PI/180,Math.cos(s)*(this.radius+i)+this.radius+this.adjust+","+(Math.sin(s)*(this.radius+i)+this.radius+this.adjust)}},computed:{points:function(){let i=0;const t=this.pins.map(((t,s)=>(i+=t,this.valueToPoint(t,s)))).join(" ");return this.$emit("avarage",i/this.total),t},total:function(){return this.pins.length}}}),new Vue({el:"#AudioBookPlayer",data:{handle_clicked:!1,handle_position:0,bar:null,is_playing:!1,is_loading:!0,is_error:!1,error_timeout:null,error_msg:"",audio_obj:null,audio_index:0,duration:0,current_time:0,audio_pins:[],analyser:null,data_array:[],buffered:[],speed:1,repeat:!1,repeat_count:arBookPlayer.repeat_count,list_play:!1,show_list:!1,arBookPlayer:arBookPlayer,show_info:!1,cover_art_avarage:0},mounted:function(){this.bar=this.$refs.bar.getBoundingClientRect(),this.$refs.handle,document.addEventListener("mousedown",this.mouseDown),document.addEventListener("mouseup",(i=>this.handle_click=!1)),document.addEventListener("mousemove",this.moveHandler),window.addEventListener("resize",this.resizeHandler),this.audio_obj=new Audio(this.arBookPlayer.list_audio[this.audio_index].source),this.audio_obj.crossOrigin="anonymous",this.audio_obj.src=this.arBookPlayer.list_audio[this.audio_index].source,this.audio_obj.load(),this.audio_obj.addEventListener("loadeddata",(()=>{this.duration=this.audio_obj.duration})),this.audio_obj.addEventListener("ended",this.onEnded),this.audio_obj.addEventListener("progress",this.onProgress),this.audio_obj.addEventListener("loadedmetadata",this.onProgress),this.audio_obj.addEventListener("playing",(i=>this.is_playing=!0)),this.audio_obj.addEventListener("pause",(i=>this.is_playing=!1)),this.audio_obj.addEventListener("canplay",(i=>this.is_loading=!1)),this.audio_obj.addEventListener("seeking",(i=>this.is_loading=!0)),this.audio_obj.onerror=this.onError},methods:{onError:function(){let i=this.audio_obj.error.code+": "+this.audio_obj.error.message;console.error("ERROR",i),this.is_error=!0,this.error_msg=i,this.is_playing=!1,this.is_loading=!1,clearTimeout(this.error_timeout),this.error_timeout=setTimeout((()=>{this.is_error=!1,this.error_msg=""}),3500)},onEnded:function(i){if(this.audio_obj.currentTime=0,this.repeat&&this.repeat_count>0)return this.audio_obj.play(),void(this.repeat_count=this.repeat_count-1);if(1==this.repeat_count&&(this.repeat_count=0),this.list_play){const i=this.audio_index+1;i<this.arBookPlayer.list_audio.length&&(this.audio_index=i)}else this.is_playing=!1,this.repeat=!1},onProgress:function(i){const t=100/this.duration,s=[];for(var e=0;e<this.audio_obj.buffered.length;e++){const i=this.audio_obj.buffered.start(e),a=this.audio_obj.buffered.end(e),o={};o.left=t*i+"%",o.width=t*(a-i)+"%",s.push(o)}this.buffered=s},updateAvarage:function(i){this.cover_art_avarage=i},timeUpdated:function(){this.current_time=this.audio_obj.currentTime,this.analyser.getByteTimeDomainData(this.data_array),this.audio_pins=Array.from(this.data_array),requestAnimationFrame(this.timeUpdated)},playNext:function(){const i=this.audio_index+1;i>=this.arBookPlayer.list_audio.length||(this.audio_index=i)},playPrev:function(){const i=this.audio_index-1;i<0||(this.audio_index=i)},initAnalyser:function(){const i=new AudioContext;this.analyser=i.createAnalyser();const t=i.createMediaElementSource(this.audio_obj);this.analyser.minDecibels=-90,this.analyser.maxDecibels=-10,this.analyser.smoothingTimeConstant=.75,this.analyser.fftSize=128,t.connect(this.analyser),this.analyser.connect(i.destination);const s=this.analyser.frequencyBinCount;this.data_array=new Uint8Array(s)},playAudio:function(){this.is_playing?this.audio_obj.pause():this.audio_obj.play(),null==this.analyser&&(this.initAnalyser(),requestAnimationFrame(this.timeUpdated))},toggleSpeed:function(){const i=["0.5","0.7","1","1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2"];let t=i.indexOf(this.speed.toString())+1;t>i.length-1&&(t=0),this.speed=parseFloat(i[t]),this.audio_obj.playbackRate=this.speed},barClick:function(i){const t=(i.clientX-this.bar.x)*this.duration/this.bar.width;this.audio_obj.currentTime=t,this.handle_click=!0},mouseDown:function(i){"handle"==i.target.id&&(this.handle_click=!0)},resizeHandler:function(){this.bar=this.$refs.bar.getBoundingClientRect()},formatSeconds:function(i){var t=Math.floor(i/3600),s=Math.floor((i-3600*t)/60),e=Math.floor(i-3600*t-60*s);return s<10&&(s="0"+s),e<10&&(e="0"+e),s+":"+e},moveHandler:function(i){let t=this.bar.width,s=this.bar.x;if(this.bar.right,this.handle_click){let e=i.clientX-s;e<0&&(e=0),e>t&&(e=t),this.current_time=e*this.duration/t,this.audio_obj.currentTime=this.current_time}},moveAudio:function(i,t){let s=this.current_time;switch(t=parseInt(t),i){case"increase":s+=t;break;case"decrease":s-=t}(s>this.duration||s<0)&&(s=this.current_time),this.audio_obj.currentTime=s},updateAudio:function(i){}},computed:{endTime:function(){return this.formatSeconds(this.duration)},currentTime:function(){return this.formatSeconds(this.current_time)},handlePosition:function(){return 100*this.current_time/this.duration+"%"},leftTime:function(){return this.duration-this.current_time},maxAudioPin:function(){return this.audio_pins.slice().sort(((i,t)=>t-i)).slice(0,1)},normlizeAudioPins:function(){return this.audio_pins.map((i=>20*i/this.maxAudioPin))},info:function(){return"<p>"+this.arBookPlayer.info.join("</p><p>")+"</p>"},coverArtTransition:function(){let i=100*this.cover_art_avarage/20/100;return i<.98&&(i=.98),{transform:"scale("+i+")"}},currentLink:function(){this.audio_obj.src=this.arBookPlayer.list_audio[this.audio_index].source}},watch:{audio_index:function(i,t){this.audio_obj.src=this.arBookPlayer.list_audio[i].source,this.audio_obj.play(),this.is_loading=!0}}}));/*]]>*/
