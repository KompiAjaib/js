(function(d, t, e, m){
   
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
               
        RW.init({
            huid: &quot;491034&quot;,
            uid: &quot;c1fe2d2c87bcf8c40924b1c17a1d87f7&quot;,
            source: &quot;website&quot;,
            options: {
                &quot;size&quot;: &quot;medium&quot;,
                &quot;style&quot;: &quot;oxygen&quot;,
                &quot;isDummy&quot;: false
            }
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = &quot;rw-js&quot;,
        l = d.location, ck = &quot;Y&quot; + t.getFullYear() +
        &quot;M&quot; + t.getMonth() + &quot;D&quot; + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf(&quot;DBG=&quot;) &gt; -1) ? &quot;&quot; : &quot;.min&quot;),
        a = (&quot;https:&quot; == p ? &quot;secure.&quot; + m + &quot;js/&quot; : &quot;js.&quot; + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = &quot;text/javascript&quot;;
    rw.src = p + &quot;//&quot; + a + &quot;external&quot; + f + &quot;.js?ck=&quot; + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), &quot;script&quot;, &quot;rating-widget.com/&quot;));
