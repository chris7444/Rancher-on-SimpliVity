(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{428:function(t,e,a){"use strict";a.r(e);var s=a(35),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"inventory-group-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-group-variables"}},[t._v("#")]),t._v(" Inventory group variables")]),t._v(" "),a("h2",{attrs:{id:"group-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-files"}},[t._v("#")]),t._v(" Group files")]),t._v(" "),a("p",[t._v("The following files, in the "),a("code",[t._v("group_vars")]),t._v(" folder, contain variable definitions for each group of nodes.\nThese group files facilitate more sophisticated settings, such as additional network interfaces.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("group_vars/ranchernodes.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variables defined for all nodes in the "),a("code",[t._v("[ranchernodes]")]),t._v(" group")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("group_vars/loadbalancer.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variables defined for all nodes in the "),a("code",[t._v("[loadbalancer]")]),t._v(" group")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("group_vars/support.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variables defined for all nodes in the "),a("code",[t._v("[support]")]),t._v(" group")])])])]),t._v(" "),a("h2",{attrs:{id:"overriding-group-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overriding-group-variables"}},[t._v("#")]),t._v(" Overriding group variables")]),t._v(" "),a("p",[t._v("If you wish to configure individual nodes with different specifications to the ones defined by the group, it is possible to declare the same variables at the node level, overriding the group value. For example, if the default CPU and memory resource limits defined in for your Rancher nodes in the "),a("code",[t._v("group_vars/ranchernodes.yml")]),t._v(" file are not sufficient, you can override these values in their respective "),a("code",[t._v("hosts")]),t._v(" entries.  For example, if these are the CPU, RAM, and disk limits specified at the group level:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cpus: '2'                           # Number of vCPUs\nram: '8192'                         # RAM size in MBs\ndisk1_size: '60'                    # Disk size in Gbs\n")])])]),a("p",[t._v("you can override these values in the individual node entries in the "),a("code",[t._v("hosts")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[ranchernodes]\nhpe-rke1        ansible_host=10.15.152.21 cpus=8 ram=32768\nhpe-rke2        ansible_host=10.15.152.22 cpus=8 ram=32768\nhpe-rke3        ansible_host=10.15.152.23 cpus=8 ram=32768\n")])])]),a("h2",{attrs:{id:"common-variables-across-all-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-variables-across-all-groups"}},[t._v("#")]),t._v(" Common variables across all groups")]),t._v(" "),a("p",[t._v("The following variables apply to all node groups:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Scope")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ip_addr")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("All nodes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP address in CIDR format to be given to a node")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("cpus")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("All nodes/groups")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number of virtual CPU cores to assign to a VM or a group of VMs")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ram")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("All nodes/groups")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Amount of RAM in MB to assign to a VM or a group of VMs")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("disk1_size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("All nodes/groups")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Size of the disk in GB to attach to a VM or a group of VMs.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);