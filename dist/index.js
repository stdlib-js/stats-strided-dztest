"use strict";var f=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var x=f(function(T,z){"use strict";var O=require("@stdlib/stats-base-dists-normal-quantile").factory,P=require("@stdlib/stats-base-dists-normal-cdf").factory,_=require("@stdlib/stats-strided-dmean").ndarray,b=require("@stdlib/math-base-special-sqrt"),m=require("@stdlib/math-base-special-abs"),w=require("@stdlib/array-float64"),D=require("@stdlib/constants-float64-pinf"),K=require("@stdlib/constants-float64-ninf"),y=P(0,1),j=O(0,1),a=new w(2);function Q(t,e,i,v,c,u,l,N,r){var d,n,p,s,q;return t<=0||c<=0||i<0||i>1?(a[0]=NaN,a[1]=NaN,r.rejected=!1,r.alternative=e,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=a,r.nullValue=NaN,r.sd=NaN,r):(n=c/b(t),p=_(t,u,l,N),s=(p-v)/n,e==="less"?(d=y(s),q=j(1-i),a[0]=K,a[1]=v+(s+q)*n):e==="greater"?(d=1-y(s),q=j(1-i),a[0]=v+(s-q)*n,a[1]=D):(d=2*y(-m(s)),q=j(1-i/2),a[0]=v+(s-q)*n,a[1]=v+(s+q)*n),r.rejected=d<=i,r.alternative=e,r.alpha=i,r.pValue=d,r.statistic=s,r.ci=a,r.nullValue=v,r.sd=n,r)}z.exports=Q});var R=f(function(U,F){"use strict";var S=require("@stdlib/strided-base-stride2offset"),W=x();function g(t,e,i,v,c,u,l,N){return W(t,e,i,v,c,u,l,S(t,l),N)}F.exports=g});var E=f(function(Y,C){"use strict";var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),A=R(),B=x();k(A,"ndarray",B);C.exports=A});var G=require("path").join,H=require("@stdlib/utils-try-require"),J=require("@stdlib/assert-is-error"),L=E(),V,I=H(G(__dirname,"./native.js"));J(I)?V=L:V=I;module.exports=V;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
