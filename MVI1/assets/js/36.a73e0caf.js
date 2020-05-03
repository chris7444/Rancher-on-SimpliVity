(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{411:function(t,e,r){"use strict";r.r(e);var n=r(35),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"verify-prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verify-prerequisites"}},[t._v("#")]),t._v(" Verify prerequisites")]),t._v(" "),r("p",[t._v("Before you start deployment, you must assemble the information required to assign values for each\nvariable used by the playbooks. The variables are fully documented in the section\n"),r("a",{attrs:{href:"../config-core/ansible-config"}},[t._v("Configuring the solution")]),t._v(".")]),t._v(" "),r("p",[t._v("A brief overview of the information required is presented in the table below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Component")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Details")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Virtual Infrastructure")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("ESXi cluster of three machines"),r("br"),r("br"),t._v("vCenter 6.7U3 (CSI)"),r("br"),r("br"),t._v("vCenter 6.7U2 (non-CSI)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("If you want HA you need three machines in the cluster and you need to deploy 3 masternode VMs, one per machine. "),r("br"),r("br"),t._v("You need to know the FQDN of your vCenter server and the name of the Datacenter configured in vCenter. You will also need administrator credentials in order to create templates and spin up virtual machines.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("VLAN with access to Internet "),r("br"),t._v("(to pull Rancher artifacts)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Portgroup connected to all machines in your ESX cluster")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The playbooks install DHCP services on this VLAN so no other DHCP service should be running on this VLAN"),r("br"),r("br"),t._v("You will need one IP address for each VM configured in the Ansible inventory."),r("br"),r("br"),t._v("For more information, see the section on "),r("a",{attrs:{href:"../config-core/proxy-config"}},[t._v("Proxy configuration")]),t._v(".")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Routed subnet for use on the above VLAN")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}}),t._v(" "),r("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Frontend Network / VLAN")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}}),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("External IP address for each load balancer plus one for the frontend VIP")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("NTP Services")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("IP addresses of time servers (NTP)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Time services must be configured in your environment. The deployed solution uses certificates that are time-sensitive.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("DNS Services")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("IP addresses of DNS servers")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The DNS services deployed by the solution forwards unresolved requests to these DNS servers")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);