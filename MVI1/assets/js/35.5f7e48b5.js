(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{412:function(e,t,n){"use strict";n.r(t);var o=n(35),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"create-the-ansible-node-on-fedora"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ansible-node-on-fedora"}},[e._v("#")]),e._v(" Create the Ansible node on Fedora")]),e._v(" "),n("p",[e._v("It is recommended that you deploy the Ansible controller on Fedora, to take advantage of the built-in support for\nPython 3. The solution requires Fedora 31 and Ansible 2.9.5. It may be possible to run the playbooks\non other operating systems including RHEL and CentOS but\nthe playbooks have only been tested on Fedora. In addition to Python 3 and Ansible 2.9.5, a number of other packages\nmust be also be installed, as outlined below.")]),e._v(" "),n("p",[e._v("The playbooks should be run from a non-privileged account - in the subsequent instructions, a user named "),n("code",[e._v("rancher")]),e._v(" will be used.")]),e._v(" "),n("h2",{attrs:{id:"create-the-fedora-vm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-the-fedora-vm"}},[e._v("#")]),e._v(" Create the Fedora VM")]),e._v(" "),n("p",[e._v("Create a Virtual Machine with the following characteristics:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Guest OS:")]),e._v(" Red Hat Fedora Server 31 (64-bit)")]),e._v(" "),n("li",[n("strong",[e._v("Disk:")]),e._v(" 50G (thin provisioning)")]),e._v(" "),n("li",[n("strong",[e._v("CPU:")]),e._v(" 2")]),e._v(" "),n("li",[n("strong",[e._v("RAM:")]),e._v(" 4 GB")]),e._v(" "),n("li",[n("strong",[e._v("Ethernet Adapter:")]),e._v(" VMXNET3, connected to your Ansible or management network")])]),e._v(" "),n("p",[e._v("Install Fedora Server 31 using the x64 64-bit ISO image.\nIn the "),n("code",[e._v("Software Selection")]),e._v(" section, choose:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Base Environment:")]),e._v(" Fedora Server Edition")]),e._v(" "),n("li",[n("strong",[e._v("Add-Ons for Selected Environment:")]),e._v(" Guest Agent")])]),e._v(" "),n("p",[e._v("Select your language, keyboard layout, and timezone settings and re-boot when the installation finishes. Configure your networking and check your connectivity before moving on to the next section.")]),e._v(" "),n("h2",{attrs:{id:"password-less-sudo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#password-less-sudo"}},[e._v("#")]),e._v(" Password-less sudo")]),e._v(" "),n("p",[e._v("Configure password-less "),n("code",[e._v("sudo")]),e._v(" for the "),n("code",[e._v("rancher")]),e._v(" user on the Ansible controller node by logging in\nas "),n("code",[e._v("root")]),e._v(" and issuing the command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ usermod -a -G wheel rancher\n")])])]),n("p",[e._v("The default "),n("code",[e._v("/etc/sudoers")]),e._v(" file contains two lines for the group "),n("code",[e._v("wheel")]),e._v(". As the root user, run "),n("code",[e._v("visudo")]),e._v(" to uncomment\nthe %wheel line containing the string "),n("code",[e._v("NOPASSWD:")]),e._v(" and comment out the other %wheel line. When you are done,\nit should look like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("## Allows people in group wheel to run all commands\n#%wheel ALL=(ALL)       ALL\n\n## Same thing without a password\n%wheel ALL=(ALL)       NOPASSWD: ALL\n")])])]),n("p",[e._v("The advantage of using "),n("code",[e._v("visudo")]),e._v(" is that it will validate the changes to the file.")]),e._v(" "),n("h2",{attrs:{id:"install-ansible-and-required-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-ansible-and-required-modules"}},[e._v("#")]),e._v(" Install Ansible and required modules")]),e._v(" "),n("p",[e._v("Log in to the Ansible controller node as the "),n("code",[e._v("rancher")]),e._v(" user and run the following commands to install "),n("code",[e._v("git")]),e._v(", "),n("code",[e._v("ansible")]),e._v("\nand the required Python dependencies:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ sudo dnf update -y \n$ sudo dnf install -y git ansible python3-netaddr python3-requests python3-pyvmomi\n")])])]),n("h2",{attrs:{id:"configuring-proxy-for-the-ansible-controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-proxy-for-the-ansible-controller"}},[e._v("#")]),e._v(" Configuring proxy for the Ansible controller")]),e._v(" "),n("p",[e._v("The Ansible controller should be configured to match the proxy requirements for your environment.\nThis can be done, for example, by adding a proxy entry to the "),n("code",[e._v("/etc/dnf/dnf.conf")]),e._v(" file or by setting\nsystem-wide proxy settings in the "),n("code",[e._v("/etc/environment")]),e._v(" file.")]),e._v(" "),n("p",[e._v("The following is an example of how to configure a proxy server in the "),n("code",[e._v("/etc/dnf/dnf.conf")]),e._v(" file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[main]\ngpgcheck=1\ninstallonly_limit=3\nclean_requirements_on_remove=True\nbest=False\nskip_if_unavailable=True\nproxy=http://web-proxy.hpecloud.org:8080\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);