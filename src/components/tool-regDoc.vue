<template>
    <div class="regdoc">
        <h2 id="基础正则表达式">基础正则表达式</h2>
        <table>
            <colgroup>
                <col style="width: 21%" />
                <col style="width: 78%" />
            </colgroup>
            <thead>
                <tr class="header">
                    <th><strong>表达式</strong></th>
                    <th><strong>描述</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td><code>[abc]</code></td>
                    <td>字符集。匹配集合中所含的任一字符。</td>
                </tr>
                <tr class="even">
                    <td><code>[^abc]</code></td>
                    <td>否定字符集。匹配任何不在集合中的字符。</td>
                </tr>
                <tr class="odd">
                    <td><code>[a-z]</code></td>
                    <td>字符范围。匹配指定范围内的任意字符。</td>
                </tr>
                <tr class="even">
                    <td><code>.</code></td>
                    <td>匹配除换行符以外的任何单个字符。</td>
                </tr>
                <tr class="odd">
                    <td><code>\</code></td>
                    <td>转义字符。</td>
                </tr>
                <tr class="even">
                    <td><code>\w</code></td>
                    <td>匹配任何字母数字，包括下划线（等价于<code>[A-Za-z0-9_]</code>）。</td>
                </tr>
                <tr class="odd">
                    <td><code>\W</code></td>
                    <td>匹配任何非字母数字（等价于<code>[^A-Za-z0-9_]</code>）。</td>
                </tr>
                <tr class="even">
                    <td><code>\d</code></td>
                    <td>数字。匹配任何数字。</td>
                </tr>
                <tr class="odd">
                    <td><code>\D</code></td>
                    <td>非数字。匹配任何非数字字符。</td>
                </tr>
                <tr class="even">
                    <td><code>\s</code></td>
                    <td>空白。匹配任何空白字符，包括空格、制表符等。</td>
                </tr>
                <tr class="odd">
                    <td><code>\S</code></td>
                    <td>非空白。匹配任何非空白字符。</td>
                </tr>
                <tr class="even">
                    <td><code>(expression)</code></td>
                    <td>分组。匹配括号里的整个表达式。</td>
                </tr>
                <tr class="odd">
                    <td><code>(?:expression)</code></td>
                    <td>非捕获分组。匹配括号里的整个字符串但不获取匹配结果，拿不到分组引用。</td>
                </tr>
                <tr class="even">
                    <td><code>\num</code></td>
                    <td>
                        对前面所匹配分组的引用。比如<code>(\d)\1</code>可以匹配两个相同的数字，<code>(Code)(Sheep)\1\2</code>则可以匹配<code>CodeSheepCodeSheep</code>。
                    </td>
                </tr>
                <tr class="odd">
                    <td><code>^</code></td>
                    <td>匹配字符串或行开头。</td>
                </tr>
                <tr class="even">
                    <td><code>$</code></td>
                    <td>匹配字符串或行结尾。</td>
                </tr>
                <tr class="odd">
                    <td><code>\b</code></td>
                    <td>
                        匹配单词边界。比如<code>Sheep\b</code>可以匹配<code>CodeSheep</code>末尾的<code>Sheep</code>，不能匹配<code>CodeSheepCode</code>中的<code
                            >Sheep</code
                        >
                    </td>
                </tr>
                <tr class="even">
                    <td><code>\B</code></td>
                    <td>
                        匹配非单词边界。比如<code>Code\B</code>可以匹配<code>HelloCodeSheep</code>中的<code>Code</code>，不能匹配<code>HelloCode</code>中的<code>Code</code>。
                    </td>
                </tr>
                <tr class="odd">
                    <td><code>?</code></td>
                    <td>匹配前面的表达式0个或1个。即表示可选项。</td>
                </tr>
                <tr class="even">
                    <td><code>?</code></td>
                    <td>匹配前面的表达式0个或1个。即表示可选项。</td>
                </tr>
                <tr class="odd">
                    <td><code>+</code></td>
                    <td>匹配前面的表达式至少1个。</td>
                </tr>
                <tr class="even">
                    <td><code>*</code></td>
                    <td>匹配前面的表达式0个或多个。</td>
                </tr>
                <tr class="odd">
                    <td><code>|</code></td>
                    <td>或运算符。并集，可以匹配符号前后的表达式。</td>
                </tr>
                <tr class="even">
                    <td><code>{m}</code></td>
                    <td>匹配前面的表达式m个。</td>
                </tr>
                <tr class="odd">
                    <td><code>{m,}</code></td>
                    <td>匹配前面的表达式最少m个。</td>
                </tr>
                <tr class="even">
                    <td><code>{m,n}</code></td>
                    <td>匹配前面的表达式最少m个，最多n个。</td>
                </tr>
                <tr class="odd">
                    <td><code>(?=)</code></td>
                    <td>
                        正向预查。比如<code>Code(?=Sheep)</code>能匹配<code>CodeSheep</code>中的<code>Code</code>，但不能匹配<code>CodePig</code>中的<code>Code</code>。
                    </td>
                </tr>
                <tr class="even">
                    <td><code>(?!)</code></td>
                    <td>
                        正向否定预查。比如<code>Code(?!Sheep)</code>不能匹配<code>CodeSheep</code>中的<code>Code</code>，但能匹配<code>CodePig</code>中的<code>Code</code>。
                    </td>
                </tr>
                <tr class="odd">
                    <td><code>(?&lt;=)</code></td>
                    <td>
                        反向预查。比如<code>(?&lt;=Code)Sheep</code>能匹配<code>CodeSheep</code>中的<code>Sheep</code>，但不能匹配<code>ReadSheep</code>中的<code>Sheep</code>。
                    </td>
                </tr>
                <tr class="even">
                    <td><code>(?&lt;!)</code></td>
                    <td>
                        反向否定预查。比如<code>(?&lt;!Code)Sheep</code>不能匹配<code>CodeSheep</code>中的<code>Sheep</code>，但能匹配<code>ReadSheep</code>中的<code>Sheep</code>。
                    </td>
                </tr>
                <tr class="odd">
                    <td><code>/i</code></td>
                    <td>忽略大小写。</td>
                </tr>
                <tr class="even">
                    <td><code>/g</code></td>
                    <td>全局匹配。</td>
                </tr>
                <tr class="odd">
                    <td><code>/m</code></td>
                    <td>多行修饰符。用于多行匹配。</td>
                </tr>
            </tbody>
        </table>
        <h2 id="常用正则表达式实例">常用正则表达式实例</h2>
        <ul>
            <li><strong>数字校验</strong></li>
        </ul>
        <table>
            <thead>
                <tr class="header">
                    <th><strong>描述</strong></th>
                    <th><strong>正则表达式</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td>数字</td>
                    <td><code>^[0-9]*$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>n位数字</td>
                    <td><code>^\d{n}$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>至少n位数字</td>
                    <td><code>^\d{n,}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>m~n位数字</td>
                    <td><code>^\d{m,n}$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>整数</td>
                    <td><code>^(-?[1-9]\d*)$</code></td>
                    <td>非0开头，包括正整数和负整数</td>
                </tr>
                <tr class="even">
                    <td>正整数</td>
                    <td><code>^[1-9]\d*$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>负整数</td>
                    <td><code>^-[1-9]\d*$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>非负整数</td>
                    <td><code>^(([1-9]\d*)|0)$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>非正整数</td>
                    <td><code>^((-[1-9]\d*)|0)$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>浮点数</td>
                    <td><code>^-?(?:[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0\.0+|0)$</code></td>
                    <td>包括正浮点数和负浮点数</td>
                </tr>
                <tr class="odd">
                    <td>正浮点数</td>
                    <td><code>^(?:[1-9]\d*\.\d*|0\.\d*[1-9]\d*)$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>负浮点数</td>
                    <td><code>^-(?:[1-9]\d*\.\d*|0\.\d*[1-9]\d*)$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>非正浮点数</td>
                    <td><code>^(?:-(?:[1-9]\d*\.\d+|0\.\d*[1-9]\d*)|0\.0+|0)$</code></td>
                    <td>包含0</td>
                </tr>
                <tr class="even">
                    <td>非负浮点数</td>
                    <td><code>^(?:[1-9]\d*\.\d+|0\.\d+|0\.0+|0)$</code></td>
                    <td>包含0</td>
                </tr>
                <tr class="odd">
                    <td>仅一位小数</td>
                    <td><code>^-?(?:0|[1-9][0-9]*)\.[0-9]{1}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>最少一位小数</td>
                    <td><code>^-?(?:0|[1-9][0-9]*)\.[0-9]{1,}$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>最多两位小数</td>
                    <td><code>^-?(?:0|[1-9][0-9]*)\.[0-9]{1,2}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>连续重复的数字</td>
                    <td><code>^(\d)\1+$</code></td>
                    <td>例如：<code>111</code>，<code>222</code></td>
                </tr>
            </tbody>
        </table>
        <ul>
            <li><strong>字符校验</strong></li>
        </ul>
        <table>
            <thead>
                <tr class="header">
                    <th><strong>描述</strong></th>
                    <th><strong>正则表达式</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td>中文</td>
                    <td><code>^[\u4E00-\u9FA5]+$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>全角字符</td>
                    <td><code>^[\uFF00-\uFFFF]+$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>半角字符</td>
                    <td><code>^[\u0000-\u00FF]+$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>英文字符串（大写）</td>
                    <td><code>^[A-Z]+$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>英文字符串（小写）</td>
                    <td><code>^[a-z]+$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>英文字符串（不区分大小写）</td>
                    <td><code>^[A-Za-z]+$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>中文和数字</td>
                    <td><code>^(?:[\u4E00-\u9FA5]{0,}|\d)+$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>英文和数字</td>
                    <td><code>^[A-Za-z0-9]+$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>数字、英文字母或者下划线组成的字符串</td>
                    <td><code>^\w+$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>中文、英文、数字包括下划线</td>
                    <td><code>^[\u4E00-\u9FA5\w]+$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>不含字母的字符串</td>
                    <td><code>^[^A-Za-z]*$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>连续重复的字符串</td>
                    <td><code>^(.)\1+$</code></td>
                    <td>例如：<code>aa</code>，<code>bb</code></td>
                </tr>
                <tr class="odd">
                    <td>长度为n的字符串</td>
                    <td><code>^.{n}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>ASCII</td>
                    <td><code>^[ -~]$</code></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <hr />
        <ul>
            <li><strong>日期和时间校验</strong></li>
        </ul>
        <table>
            <colgroup>
                <col style="width: 9%" />
                <col style="width: 62%" />
                <col style="width: 28%" />
            </colgroup>
            <thead>
                <tr class="header">
                    <th><strong>描述</strong></th>
                    <th><strong>正则表达式</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td>日期</td>
                    <td><code>^\d{1,4}-(?:1[0-2]|0?[1-9])-(?:0?[1-9]|[1-2]\d|30|31)$</code></td>
                    <td>弱校验，例如：<code>2022-06-12</code></td>
                </tr>
                <tr class="even">
                    <td>日期</td>
                    <td>
                        <code
                            >^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$</code
                        >
                    </td>
                    <td>严格校验，考虑平闰年</td>
                </tr>
                <tr class="odd">
                    <td>时间</td>
                    <td><code>^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$</code></td>
                    <td>12小时制，例如：<code>11:21:31</code></td>
                </tr>
                <tr class="even">
                    <td>时间</td>
                    <td><code>^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$</code></td>
                    <td>24小时制，例如：<code>23:21:31</code></td>
                </tr>
                <tr class="odd">
                    <td>日期+时间</td>
                    <td><code>^(\d{1,4}-(?:1[0-2]|0?[1-9])-(?:0?[1-9]|[1-2]\d|30|31)) ((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$</code></td>
                    <td>例如：<code>2000-11-11 23:20:21</code></td>
                </tr>
            </tbody>
        </table>
        <hr />
        <ul>
            <li><strong>日常生活相关</strong></li>
        </ul>
        <table>
            <colgroup>
                <col style="width: 11%" />
                <col style="width: 44%" />
                <col style="width: 43%" />
            </colgroup>
            <thead>
                <tr class="header">
                    <th><strong>描述</strong></th>
                    <th><strong>正则表达式</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td>中文名</td>
                    <td><code>^[\u4E00-\u9FA5·]{2,16}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>英文名</td>
                    <td><code>^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>车牌号</td>
                    <td>
                        <code
                            >^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$</code
                        >
                    </td>
                    <td>不含新能源</td>
                </tr>
                <tr class="even">
                    <td>车牌号</td>
                    <td>
                        <code
                            >^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:(?:[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])|(?:(?:\d{5}[A-HJK])|(?:[A-HJK][A-HJ-NP-Z0-9][0-9]{4})))$</code
                        >
                    </td>
                    <td>包含新能源</td>
                </tr>
                <tr class="odd">
                    <td>火车车次</td>
                    <td><code>^[GCDZTSPKXLY1-9]\d{1,4}$</code></td>
                    <td>例如：<code>G1234</code></td>
                </tr>
                <tr class="even">
                    <td>手机号</td>
                    <td><code>^(?:(?:\+|00)86)?1[3-9]\d{9}$</code></td>
                    <td>弱匹配</td>
                </tr>
                <tr class="odd">
                    <td>手机号</td>
                    <td><code>^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$</code></td>
                    <td>严格匹配</td>
                </tr>
                <tr class="even">
                    <td>固话号码</td>
                    <td><code>^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>手机IMEI码</td>
                    <td><code>^\d{15,17}$</code></td>
                    <td>一般是15位</td>
                </tr>
                <tr class="even">
                    <td>邮编</td>
                    <td><code>^(?:0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$</code></td>
                    <td>例如：<code>211100</code></td>
                </tr>
                <tr class="odd">
                    <td>统一社会信用代码</td>
                    <td><code>^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>身份证号码(1代)</td>
                    <td><code>^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$</code></td>
                    <td>15位数字</td>
                </tr>
                <tr class="odd">
                    <td>身份证号码(2代)</td>
                    <td><code>^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[0-9Xx]$</code></td>
                    <td>18位数字</td>
                </tr>
                <tr class="even">
                    <td>QQ号</td>
                    <td><code>^[1-9][0-9]{4,}$</code></td>
                    <td>一般是5到10位</td>
                </tr>
                <tr class="odd">
                    <td>微信号</td>
                    <td><code>^[a-zA-Z][-_a-zA-Z0-9]{5,19}$</code></td>
                    <td>一般6~20位，字母开头，可包含字母、数字、-、_，不含特殊字符</td>
                </tr>
                <tr class="even">
                    <td>股票代码</td>
                    <td><code>^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$</code></td>
                    <td>A股，例如：<code>600519</code></td>
                </tr>
                <tr class="odd">
                    <td>银行卡卡号</td>
                    <td><code>^[1-9]{1}(?:\d{15}|\d{18})$</code></td>
                    <td>一般为19位</td>
                </tr>
            </tbody>
        </table>
        <hr />
        <ul>
            <li><strong>互联网相关</strong></li>
        </ul>
        <table>
            <colgroup>
                <col style="width: 14%" />
                <col style="width: 42%" />
                <col style="width: 42%" />
            </colgroup>
            <thead>
                <tr class="header">
                    <th><strong>描述</strong></th>
                    <th><strong>正则表达式</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td>域名</td>
                    <td><code>^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$</code></td>
                    <td>例如：<code>r2coding.com</code></td>
                </tr>
                <tr class="even">
                    <td>网址</td>
                    <td><code>^(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$</code></td>
                    <td>例如：<code>https://www.r2coding.com/</code></td>
                </tr>
                <tr class="odd">
                    <td>带端口号的网址(或IP)</td>
                    <td><code>^(?:https?:\/\/)?[\w-]+(?:\.[\w-]+)+:\d{1,5}\/?$</code></td>
                    <td>例如：<code>http://127.0.0.1:8888/</code></td>
                </tr>
                <tr class="even">
                    <td>URL</td>
                    <td>
                        <code
                            >^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()!@:%_\+.~#?&amp;\/\/=]*)$</code
                        >
                    </td>
                    <td>例如：<code>https://www.r2coding.com/#/README?id=1</code></td>
                </tr>
                <tr class="odd">
                    <td>邮箱email</td>
                    <td><code>^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$</code></td>
                    <td>支持中文，例如：<code>codesheep@cs.com</code></td>
                </tr>
                <tr class="even">
                    <td>用户名</td>
                    <td><code>^[a-zA-Z0-9_-]{4,20}$</code></td>
                    <td>4到20位</td>
                </tr>
                <tr class="odd">
                    <td>弱密码</td>
                    <td><code>^[\w]{6,16}$</code></td>
                    <td>6~16位，包含大小写字母和数字的组合</td>
                </tr>
                <tr class="even">
                    <td>强密码</td>
                    <td><code>^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@\.#$%^&amp;*? ]).*$</code></td>
                    <td>至少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符</td>
                </tr>
                <tr class="odd">
                    <td>端口号</td>
                    <td><code>^(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$</code></td>
                    <td>例如：<code>65535</code></td>
                </tr>
                <tr class="even">
                    <td>IPv4地址</td>
                    <td><code>^(?:(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$</code></td>
                    <td>例如：<code>192.168.31.1</code></td>
                </tr>
                <tr class="odd">
                    <td>IPv4地址+端口</td>
                    <td>
                        <code
                            >^(?:(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$</code
                        >
                    </td>
                    <td>例如：<code>192.168.31.1:8080</code></td>
                </tr>
                <tr class="even">
                    <td>IPv6地址</td>
                    <td>
                        <code
                            >^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$</code
                        >
                    </td>
                    <td>例如：<code>CDCD:910A:2222:5498:8475:1111:3900:2020</code></td>
                </tr>
                <tr class="odd">
                    <td>IPv6地址+端口</td>
                    <td>
                        <code
                            >^\[(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$</code
                        >
                    </td>
                    <td>例如：<code>[CDCD:910A:2222:5498:8475:1111:3900:2020]:9800</code></td>
                </tr>
                <tr class="even">
                    <td>子网掩码</td>
                    <td>
                        <code
                            >^(?:254|252|248|240|224|192|128)\.0\.0\.0|255\.(?:254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(?:254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(?:255|254|252|248|240|224|192|128|0)$</code
                        >
                    </td>
                    <td>例如：<code>255.255.255.0</code></td>
                </tr>
                <tr class="odd">
                    <td>MAC地址</td>
                    <td><code>^(?:(?:[a-f0-9A-F]{2}:){5}|(?:[a-f0-9A-F]{2}-){5})[a-f0-9A-F]{2}$</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>Version版本号</td>
                    <td><code>^\d+(?:\.\d+){2}$</code></td>
                    <td>例如：<code>12.1.1</code></td>
                </tr>
                <tr class="odd">
                    <td>图片后缀</td>
                    <td><code>\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)+</code></td>
                    <td>可按需增删扩展名集合</td>
                </tr>
                <tr class="even">
                    <td>视频后缀</td>
                    <td><code>\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)+</code></td>
                    <td>可按需增删扩展名集合</td>
                </tr>
                <tr class="odd">
                    <td>图片链接</td>
                    <td>
                        <code
                            >(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.+\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)</code
                        >
                    </td>
                    <td>可按需增删扩展名集合</td>
                </tr>
                <tr class="even">
                    <td>视频链接</td>
                    <td>
                        <code
                            >(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.+\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)</code
                        >
                    </td>
                    <td>可按需增删扩展名集合</td>
                </tr>
                <tr class="odd">
                    <td>迅雷链接</td>
                    <td><code>thunderx?:\/\/[a-zA-Z\d]+=</code></td>
                    <td></td>
                </tr>
                <tr class="even">
                    <td>ed2k链接</td>
                    <td><code>ed2k:\/\/\|file\|.+\|\/</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>磁力链接</td>
                    <td><code>magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*</code></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <hr />
        <ul>
            <li><strong>其他</strong></li>
        </ul>
        <table>
            <colgroup>
                <col style="width: 13%" />
                <col style="width: 47%" />
                <col style="width: 38%" />
            </colgroup>
            <thead>
                <tr class="header">
                    <th><strong>描述</strong></th>
                    <th><strong>正则表达式</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd">
                    <td>MD5格式</td>
                    <td><code>^(?:[a-f\d]{32}|[A-F\d]{32})$</code></td>
                    <td>32位MD5，例如：<code>7552E7071B118CBFFEC8C930455B4297</code></td>
                </tr>
                <tr class="even">
                    <td>BASE64格式</td>
                    <td>
                        <code
                            >^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&amp;',()*+;=\-._~:@/?%\s]*?)\s*$</code
                        >
                    </td>
                    <td>例如：<code>data:image/jpeg;base64,xxxx==</code></td>
                </tr>
                <tr class="odd">
                    <td>UUID</td>
                    <td><code>^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$</code></td>
                    <td>例如：<code>94f9d45a-71b0-4b3c-b69d-20c4bc9c8fdd</code></td>
                </tr>
                <tr class="even">
                    <td>16进制</td>
                    <td><code>^[A-Fa-f0-9]+$</code></td>
                    <td>例如：<code>FFFFFF</code></td>
                </tr>
                <tr class="odd">
                    <td>16进制颜色</td>
                    <td><code>^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$</code></td>
                    <td>例如：<code>#FFFFFF</code></td>
                </tr>
                <tr class="even">
                    <td>SQL语句</td>
                    <td><code>^(?:select|drop|delete|create|update|insert).*$</code></td>
                    <td></td>
                </tr>
                <tr class="odd">
                    <td>Java包名</td>
                    <td><code>^(?:[a-zA-Z_]\w*)+(?:[.][a-zA-Z_]\w*)+$</code></td>
                    <td>例如：<code>com.r2coding.controller</code></td>
                </tr>
                <tr class="even">
                    <td>文件扩展名</td>
                    <td><code>\.(?:doc|pdf|txt)</code></td>
                    <td>可按需增删扩展名集合</td>
                </tr>
                <tr class="odd">
                    <td>Windows文件路径</td>
                    <td><code>^[a-zA-Z]:(?:\\[\w\u4E00-\u9FA5\s]+)+[.\w\u4E00-\u9FA5\s]+$</code></td>
                    <td>例如：<code>C:\Users\Administrator\Desktop\a.txt</code></td>
                </tr>
                <tr class="even">
                    <td>Windows文件夹路径</td>
                    <td><code>^[a-zA-Z]:(?:\\[\w\u4E00-\u9FA5\s]+)+$</code></td>
                    <td>例如：<code>C:\Users\Administrator\Desktop</code></td>
                </tr>
                <tr class="odd">
                    <td>Linux文件路径</td>
                    <td><code>^\/(?:[^/]+\/)*[^/]+$</code></td>
                    <td>例如：<code>/root/library/a.txt</code></td>
                </tr>
                <tr class="even">
                    <td>Linux文件夹路径</td>
                    <td><code>^\/(?:[^/]+\/)*$</code></td>
                    <td>例如：<code>/root/library/</code></td>
                </tr>
            </tbody>
        </table>
        <p class="form">表格来源：<a href="https://www.r2coding.com/#/README?id=%e6%ad%a3%e5%88%99%e8%a1%a8%e8%be%be%e5%bc%8f%e5%8f%af%e8%a7%86%e5%8c%96%e5%b7%a5%e5%85%b7" target="_blank" rel="noopener noreferrer">https://www.r2coding.com</a></p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.regdoc{
    height: calc(100vh - 421px);
    overflow-y: auto;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    color: #606266;
    text-align: center;
    table-layout: fixed;
    word-break: break-all;
    overflow: auto;
}
table tr th {
    background: #f8f8f8;
    color: #606266;
    font-weight: bold;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
}
table tr th.th_border {
    border-right: solid 1px #fff;
    border-left: solid 1px #dcdfe6;
}
table tr td {
    border: solid 1px #dcdfe6;
}
.form{
    margin: 1rem 0;
    text-align: center;
}
ul li{
    margin: 1rem 0;
}
</style>
