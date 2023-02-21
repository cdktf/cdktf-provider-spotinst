# `statefulNodeAzure` Submodule <a name="`statefulNodeAzure` Submodule" id="@cdktf/provider-spotinst.statefulNodeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatefulNodeAzure <a name="StatefulNodeAzure" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure spotinst_stateful_node_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image: StatefulNodeAzureImage,
  login: StatefulNodeAzureLogin,
  name: str,
  network: StatefulNodeAzureNetwork,
  od_sizes: typing.List[str],
  os: str,
  region: str,
  resource_group_name: str,
  should_persist_data_disks: typing.Union[bool, IResolvable],
  should_persist_network: typing.Union[bool, IResolvable],
  should_persist_os_disk: typing.Union[bool, IResolvable],
  spot_sizes: typing.List[str],
  strategy: StatefulNodeAzureStrategy,
  attach_data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureAttachDataDisk]] = None,
  boot_diagnostics: typing.Union[IResolvable, typing.List[StatefulNodeAzureBootDiagnostics]] = None,
  custom_data: str = None,
  data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureDataDisk]] = None,
  data_disks_persistence_mode: str = None,
  delete: typing.Union[IResolvable, typing.List[StatefulNodeAzureDelete]] = None,
  description: str = None,
  detach_data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureDetachDataDisk]] = None,
  extension: typing.Union[IResolvable, typing.List[StatefulNodeAzureExtension]] = None,
  health: StatefulNodeAzureHealth = None,
  id: str = None,
  import_vm: typing.Union[IResolvable, typing.List[StatefulNodeAzureImportVm]] = None,
  load_balancer: typing.Union[IResolvable, typing.List[StatefulNodeAzureLoadBalancer]] = None,
  managed_service_identities: typing.Union[IResolvable, typing.List[StatefulNodeAzureManagedServiceIdentities]] = None,
  os_disk: StatefulNodeAzureOsDisk = None,
  os_disk_persistence_mode: str = None,
  preferred_spot_sizes: typing.List[str] = None,
  preferred_zones: str = None,
  scheduling_task: typing.Union[IResolvable, typing.List[StatefulNodeAzureSchedulingTask]] = None,
  secret: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecret]] = None,
  should_persist_vm: typing.Union[bool, IResolvable] = None,
  shutdown_script: str = None,
  signal: typing.Union[IResolvable, typing.List[StatefulNodeAzureSignal]] = None,
  tag: typing.Union[IResolvable, typing.List[StatefulNodeAzureTag]] = None,
  update_state: typing.Union[IResolvable, typing.List[StatefulNodeAzureUpdateState]] = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistDataDisks">should_persist_data_disks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistNetwork">should_persist_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistOsDisk">should_persist_os_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.spotSizes">spot_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.attachDataDisk">attach_data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]</code> | attach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.bootDiagnostics">boot_diagnostics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]</code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.dataDisk">data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.dataDisksPersistenceMode">data_disks_persistence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.delete">delete</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.detachDataDisk">detach_data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]</code> | detach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.extension">extension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]</code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.importVm">import_vm</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]</code> | import_vm block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.managedServiceIdentities">managed_service_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.osDiskPersistenceMode">os_disk_persistence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.preferredSpotSizes">preferred_spot_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.preferredZones">preferred_zones</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.schedulingTask">scheduling_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistVm">should_persist_vm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.signal">signal</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]</code> | signal block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]</code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.updateState">update_state</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]</code> | update_state block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.image"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image StatefulNodeAzure#image}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.login"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#login StatefulNodeAzure#login}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network StatefulNodeAzure#network}

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.odSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `should_persist_data_disks`<sup>Required</sup> <a name="should_persist_data_disks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistDataDisks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}.

---

##### `should_persist_network`<sup>Required</sup> <a name="should_persist_network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistNetwork"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}.

---

##### `should_persist_os_disk`<sup>Required</sup> <a name="should_persist_os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistOsDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}.

---

##### `spot_sizes`<sup>Required</sup> <a name="spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.spotSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#strategy StatefulNodeAzure#strategy}

---

##### `attach_data_disk`<sup>Optional</sup> <a name="attach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.attachDataDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]

attach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.bootDiagnostics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]

boot_diagnostics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}.

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.dataDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]

data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}

---

##### `data_disks_persistence_mode`<sup>Optional</sup> <a name="data_disks_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.dataDisksPersistenceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.delete"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]

delete block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#delete StatefulNodeAzure#delete}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}.

---

##### `detach_data_disk`<sup>Optional</sup> <a name="detach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.detachDataDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]

detach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.extension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]

extension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#extension StatefulNodeAzure#extension}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.health"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

health block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health StatefulNodeAzure#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_vm`<sup>Optional</sup> <a name="import_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.importVm"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]

import_vm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.loadBalancer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}

---

##### `managed_service_identities`<sup>Optional</sup> <a name="managed_service_identities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.managedServiceIdentities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]

managed_service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}

---

##### `os_disk`<sup>Optional</sup> <a name="os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}

---

##### `os_disk_persistence_mode`<sup>Optional</sup> <a name="os_disk_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.osDiskPersistenceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}.

---

##### `preferred_spot_sizes`<sup>Optional</sup> <a name="preferred_spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.preferredSpotSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}.

---

##### `preferred_zones`<sup>Optional</sup> <a name="preferred_zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.preferredZones"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}.

---

##### `scheduling_task`<sup>Optional</sup> <a name="scheduling_task" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.schedulingTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]

scheduling_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#secret StatefulNodeAzure#secret}

---

##### `should_persist_vm`<sup>Optional</sup> <a name="should_persist_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shouldPersistVm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}.

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.shutdownScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}.

---

##### `signal`<sup>Optional</sup> <a name="signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.signal"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]

signal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#signal StatefulNodeAzure#signal}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag StatefulNodeAzure#tag}

---

##### `update_state`<sup>Optional</sup> <a name="update_state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.updateState"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]

update_state block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#update_state StatefulNodeAzure#update_state}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk">put_attach_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics">put_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk">put_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete">put_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk">put_detach_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth">put_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm">put_import_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer">put_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin">put_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities">put_managed_service_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk">put_os_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask">put_scheduling_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal">put_signal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy">put_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState">put_update_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk">reset_attach_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics">reset_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk">reset_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode">reset_data_disks_persistence_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk">reset_detach_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth">reset_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm">reset_import_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer">reset_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities">reset_managed_service_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk">reset_os_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode">reset_os_disk_persistence_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes">reset_preferred_spot_sizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones">reset_preferred_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask">reset_scheduling_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm">reset_should_persist_vm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript">reset_shutdown_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal">reset_signal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState">reset_update_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_attach_data_disk` <a name="put_attach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk"></a>

```python
def put_attach_data_disk(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureAttachDataDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]

---

##### `put_boot_diagnostics` <a name="put_boot_diagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics"></a>

```python
def put_boot_diagnostics(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureBootDiagnostics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]

---

##### `put_data_disk` <a name="put_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk"></a>

```python
def put_data_disk(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureDataDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]

---

##### `put_delete` <a name="put_delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete"></a>

```python
def put_delete(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureDelete]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]

---

##### `put_detach_data_disk` <a name="put_detach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk"></a>

```python
def put_detach_data_disk(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureDetachDataDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension"></a>

```python
def put_extension(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureExtension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]

---

##### `put_health` <a name="put_health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth"></a>

```python
def put_health(
  auto_healing: typing.Union[bool, IResolvable],
  health_check_types: typing.List[str],
  grace_period: typing.Union[int, float] = None,
  unhealthy_duration: typing.Union[int, float] = None
) -> None
```

###### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}.

---

###### `health_check_types`<sup>Required</sup> <a name="health_check_types" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.healthCheckTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}.

---

###### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.gracePeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}.

---

###### `unhealthy_duration`<sup>Optional</sup> <a name="unhealthy_duration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.unhealthyDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}.

---

##### `put_image` <a name="put_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage"></a>

```python
def put_image(
  custom_image: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageCustomImage]] = None,
  gallery: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageGallery]] = None,
  marketplace_image: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageMarketplaceImage]] = None
) -> None
```

###### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage.parameter.customImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}

---

###### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage.parameter.gallery"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]

gallery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery StatefulNodeAzure#gallery}

---

###### `marketplace_image`<sup>Optional</sup> <a name="marketplace_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage.parameter.marketplaceImage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]

marketplace_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}

---

##### `put_import_vm` <a name="put_import_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm"></a>

```python
def put_import_vm(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImportVm]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]

---

##### `put_load_balancer` <a name="put_load_balancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer"></a>

```python
def put_load_balancer(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureLoadBalancer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]

---

##### `put_login` <a name="put_login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin"></a>

```python
def put_login(
  user_name: str,
  password: str = None,
  ssh_public_key: str = None
) -> None
```

###### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}.

---

###### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin.parameter.sshPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}.

---

##### `put_managed_service_identities` <a name="put_managed_service_identities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities"></a>

```python
def put_managed_service_identities(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureManagedServiceIdentities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]

---

##### `put_network` <a name="put_network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork"></a>

```python
def put_network(
  network_interface: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterface]],
  network_resource_group_name: str,
  virtual_network_name: str
) -> None
```

###### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}

---

###### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork.parameter.networkResourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

###### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork.parameter.virtualNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}.

---

##### `put_os_disk` <a name="put_os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk"></a>

```python
def put_os_disk(
  type: str,
  size_gb: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

###### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk.parameter.sizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `put_scheduling_task` <a name="put_scheduling_task" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask"></a>

```python
def put_scheduling_task(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSchedulingTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]

---

##### `put_signal` <a name="put_signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal"></a>

```python
def put_signal(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSignal]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]

---

##### `put_strategy` <a name="put_strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy"></a>

```python
def put_strategy(
  fallback_to_on_demand: typing.Union[bool, IResolvable],
  draining_timeout: typing.Union[int, float] = None,
  optimization_windows: typing.List[str] = None,
  preferred_life_cycle: str = None,
  revert_to_spot: StatefulNodeAzureStrategyRevertToSpot = None
) -> None
```

###### `fallback_to_on_demand`<sup>Required</sup> <a name="fallback_to_on_demand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.fallbackToOnDemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}.

---

###### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

###### `optimization_windows`<sup>Optional</sup> <a name="optimization_windows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.optimizationWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}.

---

###### `preferred_life_cycle`<sup>Optional</sup> <a name="preferred_life_cycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.preferredLifeCycle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}.

---

###### `revert_to_spot`<sup>Optional</sup> <a name="revert_to_spot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.revertToSpot"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]

---

##### `put_update_state` <a name="put_update_state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState"></a>

```python
def put_update_state(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureUpdateState]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]

---

##### `reset_attach_data_disk` <a name="reset_attach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk"></a>

```python
def reset_attach_data_disk() -> None
```

##### `reset_boot_diagnostics` <a name="reset_boot_diagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics"></a>

```python
def reset_boot_diagnostics() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_data_disk` <a name="reset_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk"></a>

```python
def reset_data_disk() -> None
```

##### `reset_data_disks_persistence_mode` <a name="reset_data_disks_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode"></a>

```python
def reset_data_disks_persistence_mode() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_detach_data_disk` <a name="reset_detach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk"></a>

```python
def reset_detach_data_disk() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_health` <a name="reset_health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth"></a>

```python
def reset_health() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_vm` <a name="reset_import_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm"></a>

```python
def reset_import_vm() -> None
```

##### `reset_load_balancer` <a name="reset_load_balancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer"></a>

```python
def reset_load_balancer() -> None
```

##### `reset_managed_service_identities` <a name="reset_managed_service_identities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities"></a>

```python
def reset_managed_service_identities() -> None
```

##### `reset_os_disk` <a name="reset_os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk"></a>

```python
def reset_os_disk() -> None
```

##### `reset_os_disk_persistence_mode` <a name="reset_os_disk_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode"></a>

```python
def reset_os_disk_persistence_mode() -> None
```

##### `reset_preferred_spot_sizes` <a name="reset_preferred_spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes"></a>

```python
def reset_preferred_spot_sizes() -> None
```

##### `reset_preferred_zones` <a name="reset_preferred_zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones"></a>

```python
def reset_preferred_zones() -> None
```

##### `reset_scheduling_task` <a name="reset_scheduling_task" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask"></a>

```python
def reset_scheduling_task() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_should_persist_vm` <a name="reset_should_persist_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm"></a>

```python
def reset_should_persist_vm() -> None
```

##### `reset_shutdown_script` <a name="reset_shutdown_script" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript"></a>

```python
def reset_shutdown_script() -> None
```

##### `reset_signal` <a name="reset_signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal"></a>

```python
def reset_signal() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_update_state` <a name="reset_update_state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState"></a>

```python
def reset_update_state() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzure.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk">attach_data_disk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete">delete</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk">detach_data_disk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm">import_vm</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities">managed_service_identities</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask">scheduling_task</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal">signal</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState">update_state</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput">attach_data_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput">boot_diagnostics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput">data_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput">data_disks_persistence_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput">delete_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput">detach_data_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput">extension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput">health_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput">image_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput">import_vm_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput">load_balancer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput">login_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput">managed_service_identities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput">od_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput">os_disk_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput">os_disk_persistence_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput">preferred_spot_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput">preferred_zones_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput">scheduling_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput">should_persist_data_disks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput">should_persist_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput">should_persist_os_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput">should_persist_vm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput">shutdown_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput">signal_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput">spot_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput">strategy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput">update_state_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode">data_disks_persistence_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode">os_disk_persistence_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes">preferred_spot_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones">preferred_zones</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks">should_persist_data_disks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork">should_persist_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk">should_persist_os_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm">should_persist_vm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes">spot_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attach_data_disk`<sup>Required</sup> <a name="attach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk"></a>

```python
attach_data_disk: StatefulNodeAzureAttachDataDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a>

---

##### `boot_diagnostics`<sup>Required</sup> <a name="boot_diagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics"></a>

```python
boot_diagnostics: StatefulNodeAzureBootDiagnosticsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a>

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk"></a>

```python
data_disk: StatefulNodeAzureDataDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a>

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete"></a>

```python
delete: StatefulNodeAzureDeleteList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a>

---

##### `detach_data_disk`<sup>Required</sup> <a name="detach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk"></a>

```python
detach_data_disk: StatefulNodeAzureDetachDataDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension"></a>

```python
extension: StatefulNodeAzureExtensionList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health"></a>

```python
health: StatefulNodeAzureHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image"></a>

```python
image: StatefulNodeAzureImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a>

---

##### `import_vm`<sup>Required</sup> <a name="import_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm"></a>

```python
import_vm: StatefulNodeAzureImportVmList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a>

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer"></a>

```python
load_balancer: StatefulNodeAzureLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login"></a>

```python
login: StatefulNodeAzureLoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a>

---

##### `managed_service_identities`<sup>Required</sup> <a name="managed_service_identities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities"></a>

```python
managed_service_identities: StatefulNodeAzureManagedServiceIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network"></a>

```python
network: StatefulNodeAzureNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a>

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk"></a>

```python
os_disk: StatefulNodeAzureOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a>

---

##### `scheduling_task`<sup>Required</sup> <a name="scheduling_task" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask"></a>

```python
scheduling_task: StatefulNodeAzureSchedulingTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret"></a>

```python
secret: StatefulNodeAzureSecretList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a>

---

##### `signal`<sup>Required</sup> <a name="signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal"></a>

```python
signal: StatefulNodeAzureSignalList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy"></a>

```python
strategy: StatefulNodeAzureStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag"></a>

```python
tag: StatefulNodeAzureTagList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a>

---

##### `update_state`<sup>Required</sup> <a name="update_state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState"></a>

```python
update_state: StatefulNodeAzureUpdateStateList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a>

---

##### `attach_data_disk_input`<sup>Optional</sup> <a name="attach_data_disk_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput"></a>

```python
attach_data_disk_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureAttachDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]

---

##### `boot_diagnostics_input`<sup>Optional</sup> <a name="boot_diagnostics_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput"></a>

```python
boot_diagnostics_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureBootDiagnostics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `data_disk_input`<sup>Optional</sup> <a name="data_disk_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput"></a>

```python
data_disk_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]

---

##### `data_disks_persistence_mode_input`<sup>Optional</sup> <a name="data_disks_persistence_mode_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput"></a>

```python
data_disks_persistence_mode_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput"></a>

```python
delete_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureDelete]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `detach_data_disk_input`<sup>Optional</sup> <a name="detach_data_disk_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput"></a>

```python
detach_data_disk_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureDetachDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput"></a>

```python
extension_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]

---

##### `health_input`<sup>Optional</sup> <a name="health_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput"></a>

```python
health_input: StatefulNodeAzureHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput"></a>

```python
image_input: StatefulNodeAzureImage
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `import_vm_input`<sup>Optional</sup> <a name="import_vm_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput"></a>

```python
import_vm_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureImportVm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput"></a>

```python
load_balancer_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput"></a>

```python
login_input: StatefulNodeAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `managed_service_identities_input`<sup>Optional</sup> <a name="managed_service_identities_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput"></a>

```python
managed_service_identities_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureManagedServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput"></a>

```python
network_input: StatefulNodeAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `od_sizes_input`<sup>Optional</sup> <a name="od_sizes_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput"></a>

```python
od_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_disk_input`<sup>Optional</sup> <a name="os_disk_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput"></a>

```python
os_disk_input: StatefulNodeAzureOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `os_disk_persistence_mode_input`<sup>Optional</sup> <a name="os_disk_persistence_mode_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput"></a>

```python
os_disk_persistence_mode_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `preferred_spot_sizes_input`<sup>Optional</sup> <a name="preferred_spot_sizes_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput"></a>

```python
preferred_spot_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_zones_input`<sup>Optional</sup> <a name="preferred_zones_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput"></a>

```python
preferred_zones_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scheduling_task_input`<sup>Optional</sup> <a name="scheduling_task_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput"></a>

```python
scheduling_task_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureSchedulingTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]

---

##### `should_persist_data_disks_input`<sup>Optional</sup> <a name="should_persist_data_disks_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput"></a>

```python
should_persist_data_disks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_persist_network_input`<sup>Optional</sup> <a name="should_persist_network_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput"></a>

```python
should_persist_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_persist_os_disk_input`<sup>Optional</sup> <a name="should_persist_os_disk_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput"></a>

```python
should_persist_os_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_persist_vm_input`<sup>Optional</sup> <a name="should_persist_vm_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput"></a>

```python
should_persist_vm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shutdown_script_input`<sup>Optional</sup> <a name="shutdown_script_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput"></a>

```python
shutdown_script_input: str
```

- *Type:* str

---

##### `signal_input`<sup>Optional</sup> <a name="signal_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput"></a>

```python
signal_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureSignal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]

---

##### `spot_sizes_input`<sup>Optional</sup> <a name="spot_sizes_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput"></a>

```python
spot_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput"></a>

```python
strategy_input: StatefulNodeAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]

---

##### `update_state_input`<sup>Optional</sup> <a name="update_state_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput"></a>

```python
update_state_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureUpdateState]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `data_disks_persistence_mode`<sup>Required</sup> <a name="data_disks_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode"></a>

```python
data_disks_persistence_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes"></a>

```python
od_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `os_disk_persistence_mode`<sup>Required</sup> <a name="os_disk_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode"></a>

```python
os_disk_persistence_mode: str
```

- *Type:* str

---

##### `preferred_spot_sizes`<sup>Required</sup> <a name="preferred_spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes"></a>

```python
preferred_spot_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_zones`<sup>Required</sup> <a name="preferred_zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones"></a>

```python
preferred_zones: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `should_persist_data_disks`<sup>Required</sup> <a name="should_persist_data_disks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks"></a>

```python
should_persist_data_disks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_persist_network`<sup>Required</sup> <a name="should_persist_network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork"></a>

```python
should_persist_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_persist_os_disk`<sup>Required</sup> <a name="should_persist_os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk"></a>

```python
should_persist_os_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_persist_vm`<sup>Required</sup> <a name="should_persist_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm"></a>

```python
should_persist_vm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shutdown_script`<sup>Required</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

---

##### `spot_sizes`<sup>Required</sup> <a name="spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes"></a>

```python
spot_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StatefulNodeAzureAttachDataDisk <a name="StatefulNodeAzureAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureAttachDataDisk(
  data_disk_name: str,
  data_disk_resource_group_name: str,
  size_gb: typing.Union[int, float],
  storage_account_type: str,
  lun: typing.Union[int, float] = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName">data_disk_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName">data_disk_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}. |

---

##### `data_disk_name`<sup>Required</sup> <a name="data_disk_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName"></a>

```python
data_disk_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `data_disk_resource_group_name`<sup>Required</sup> <a name="data_disk_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName"></a>

```python
data_disk_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}.

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}.

---

### StatefulNodeAzureBootDiagnostics <a name="StatefulNodeAzureBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureBootDiagnostics(
  is_enabled: typing.Union[bool, IResolvable] = None,
  storage_url: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl">storage_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `storage_url`<sup>Optional</sup> <a name="storage_url" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl"></a>

```python
storage_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureConfig <a name="StatefulNodeAzureConfig" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image: StatefulNodeAzureImage,
  login: StatefulNodeAzureLogin,
  name: str,
  network: StatefulNodeAzureNetwork,
  od_sizes: typing.List[str],
  os: str,
  region: str,
  resource_group_name: str,
  should_persist_data_disks: typing.Union[bool, IResolvable],
  should_persist_network: typing.Union[bool, IResolvable],
  should_persist_os_disk: typing.Union[bool, IResolvable],
  spot_sizes: typing.List[str],
  strategy: StatefulNodeAzureStrategy,
  attach_data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureAttachDataDisk]] = None,
  boot_diagnostics: typing.Union[IResolvable, typing.List[StatefulNodeAzureBootDiagnostics]] = None,
  custom_data: str = None,
  data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureDataDisk]] = None,
  data_disks_persistence_mode: str = None,
  delete: typing.Union[IResolvable, typing.List[StatefulNodeAzureDelete]] = None,
  description: str = None,
  detach_data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureDetachDataDisk]] = None,
  extension: typing.Union[IResolvable, typing.List[StatefulNodeAzureExtension]] = None,
  health: StatefulNodeAzureHealth = None,
  id: str = None,
  import_vm: typing.Union[IResolvable, typing.List[StatefulNodeAzureImportVm]] = None,
  load_balancer: typing.Union[IResolvable, typing.List[StatefulNodeAzureLoadBalancer]] = None,
  managed_service_identities: typing.Union[IResolvable, typing.List[StatefulNodeAzureManagedServiceIdentities]] = None,
  os_disk: StatefulNodeAzureOsDisk = None,
  os_disk_persistence_mode: str = None,
  preferred_spot_sizes: typing.List[str] = None,
  preferred_zones: str = None,
  scheduling_task: typing.Union[IResolvable, typing.List[StatefulNodeAzureSchedulingTask]] = None,
  secret: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecret]] = None,
  should_persist_vm: typing.Union[bool, IResolvable] = None,
  shutdown_script: str = None,
  signal: typing.Union[IResolvable, typing.List[StatefulNodeAzureSignal]] = None,
  tag: typing.Union[IResolvable, typing.List[StatefulNodeAzureTag]] = None,
  update_state: typing.Union[IResolvable, typing.List[StatefulNodeAzureUpdateState]] = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes">od_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks">should_persist_data_disks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork">should_persist_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk">should_persist_os_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes">spot_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk">attach_data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]</code> | attach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics">boot_diagnostics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]</code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk">data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode">data_disks_persistence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete">delete</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk">detach_data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]</code> | detach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension">extension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]</code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm">import_vm</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]</code> | import_vm block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer">load_balancer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities">managed_service_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode">os_disk_persistence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes">preferred_spot_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones">preferred_zones</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask">scheduling_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm">should_persist_vm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal">signal</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]</code> | signal block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]</code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState">update_state</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]</code> | update_state block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image"></a>

```python
image: StatefulNodeAzureImage
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image StatefulNodeAzure#image}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login"></a>

```python
login: StatefulNodeAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#login StatefulNodeAzure#login}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network"></a>

```python
network: StatefulNodeAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network StatefulNodeAzure#network}

---

##### `od_sizes`<sup>Required</sup> <a name="od_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes"></a>

```python
od_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `should_persist_data_disks`<sup>Required</sup> <a name="should_persist_data_disks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks"></a>

```python
should_persist_data_disks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}.

---

##### `should_persist_network`<sup>Required</sup> <a name="should_persist_network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork"></a>

```python
should_persist_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}.

---

##### `should_persist_os_disk`<sup>Required</sup> <a name="should_persist_os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk"></a>

```python
should_persist_os_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}.

---

##### `spot_sizes`<sup>Required</sup> <a name="spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes"></a>

```python
spot_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy"></a>

```python
strategy: StatefulNodeAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#strategy StatefulNodeAzure#strategy}

---

##### `attach_data_disk`<sup>Optional</sup> <a name="attach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk"></a>

```python
attach_data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureAttachDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]

attach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics"></a>

```python
boot_diagnostics: typing.Union[IResolvable, typing.List[StatefulNodeAzureBootDiagnostics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]

boot_diagnostics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}.

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk"></a>

```python
data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]

data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}

---

##### `data_disks_persistence_mode`<sup>Optional</sup> <a name="data_disks_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode"></a>

```python
data_disks_persistence_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete"></a>

```python
delete: typing.Union[IResolvable, typing.List[StatefulNodeAzureDelete]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]

delete block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#delete StatefulNodeAzure#delete}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}.

---

##### `detach_data_disk`<sup>Optional</sup> <a name="detach_data_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk"></a>

```python
detach_data_disk: typing.Union[IResolvable, typing.List[StatefulNodeAzureDetachDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]

detach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension"></a>

```python
extension: typing.Union[IResolvable, typing.List[StatefulNodeAzureExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]

extension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#extension StatefulNodeAzure#extension}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health"></a>

```python
health: StatefulNodeAzureHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

health block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health StatefulNodeAzure#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_vm`<sup>Optional</sup> <a name="import_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm"></a>

```python
import_vm: typing.Union[IResolvable, typing.List[StatefulNodeAzureImportVm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]

import_vm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer"></a>

```python
load_balancer: typing.Union[IResolvable, typing.List[StatefulNodeAzureLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}

---

##### `managed_service_identities`<sup>Optional</sup> <a name="managed_service_identities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities"></a>

```python
managed_service_identities: typing.Union[IResolvable, typing.List[StatefulNodeAzureManagedServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]

managed_service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}

---

##### `os_disk`<sup>Optional</sup> <a name="os_disk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk"></a>

```python
os_disk: StatefulNodeAzureOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}

---

##### `os_disk_persistence_mode`<sup>Optional</sup> <a name="os_disk_persistence_mode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode"></a>

```python
os_disk_persistence_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}.

---

##### `preferred_spot_sizes`<sup>Optional</sup> <a name="preferred_spot_sizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes"></a>

```python
preferred_spot_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}.

---

##### `preferred_zones`<sup>Optional</sup> <a name="preferred_zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones"></a>

```python
preferred_zones: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}.

---

##### `scheduling_task`<sup>Optional</sup> <a name="scheduling_task" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask"></a>

```python
scheduling_task: typing.Union[IResolvable, typing.List[StatefulNodeAzureSchedulingTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]

scheduling_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#secret StatefulNodeAzure#secret}

---

##### `should_persist_vm`<sup>Optional</sup> <a name="should_persist_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm"></a>

```python
should_persist_vm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}.

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}.

---

##### `signal`<sup>Optional</sup> <a name="signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal"></a>

```python
signal: typing.Union[IResolvable, typing.List[StatefulNodeAzureSignal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]

signal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#signal StatefulNodeAzure#signal}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[StatefulNodeAzureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag StatefulNodeAzure#tag}

---

##### `update_state`<sup>Optional</sup> <a name="update_state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState"></a>

```python
update_state: typing.Union[IResolvable, typing.List[StatefulNodeAzureUpdateState]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]

update_state block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#update_state StatefulNodeAzure#update_state}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}.

---

### StatefulNodeAzureDataDisk <a name="StatefulNodeAzureDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDataDisk(
  lun: typing.Union[int, float],
  size_gb: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureDelete <a name="StatefulNodeAzureDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDelete(
  disk_should_deallocate: typing.Union[bool, IResolvable],
  network_should_deallocate: typing.Union[bool, IResolvable],
  public_ip_should_deallocate: typing.Union[bool, IResolvable],
  should_terminate_vm: typing.Union[bool, IResolvable],
  snapshot_should_deallocate: typing.Union[bool, IResolvable],
  disk_ttl_in_hours: typing.Union[int, float] = None,
  network_ttl_in_hours: typing.Union[int, float] = None,
  public_ip_ttl_in_hours: typing.Union[int, float] = None,
  snapshot_ttl_in_hours: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate">disk_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate">network_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate">public_ip_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm">should_terminate_vm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate">snapshot_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours">disk_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours">network_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours">public_ip_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours">snapshot_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}. |

---

##### `disk_should_deallocate`<sup>Required</sup> <a name="disk_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate"></a>

```python
disk_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}.

---

##### `network_should_deallocate`<sup>Required</sup> <a name="network_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate"></a>

```python
network_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}.

---

##### `public_ip_should_deallocate`<sup>Required</sup> <a name="public_ip_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate"></a>

```python
public_ip_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}.

---

##### `should_terminate_vm`<sup>Required</sup> <a name="should_terminate_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm"></a>

```python
should_terminate_vm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}.

---

##### `snapshot_should_deallocate`<sup>Required</sup> <a name="snapshot_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate"></a>

```python
snapshot_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}.

---

##### `disk_ttl_in_hours`<sup>Optional</sup> <a name="disk_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours"></a>

```python
disk_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}.

---

##### `network_ttl_in_hours`<sup>Optional</sup> <a name="network_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours"></a>

```python
network_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}.

---

##### `public_ip_ttl_in_hours`<sup>Optional</sup> <a name="public_ip_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours"></a>

```python
public_ip_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}.

---

##### `snapshot_ttl_in_hours`<sup>Optional</sup> <a name="snapshot_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours"></a>

```python
snapshot_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}.

---

### StatefulNodeAzureDetachDataDisk <a name="StatefulNodeAzureDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDetachDataDisk(
  data_disk_name: str,
  data_disk_resource_group_name: str,
  should_deallocate: typing.Union[bool, IResolvable],
  ttl_in_hours: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName">data_disk_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName">data_disk_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate">should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours">ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}. |

---

##### `data_disk_name`<sup>Required</sup> <a name="data_disk_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName"></a>

```python
data_disk_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `data_disk_resource_group_name`<sup>Required</sup> <a name="data_disk_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName"></a>

```python
data_disk_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `should_deallocate`<sup>Required</sup> <a name="should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate"></a>

```python
should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}.

---

##### `ttl_in_hours`<sup>Optional</sup> <a name="ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours"></a>

```python
ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}.

---

### StatefulNodeAzureExtension <a name="StatefulNodeAzureExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureExtension(
  api_version: str,
  minor_version_auto_upgrade: typing.Union[bool, IResolvable],
  name: str,
  publisher: str,
  type: str,
  protected_settings: typing.Mapping[str] = None,
  public_settings: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion">api_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade">minor_version_auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings">protected_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings">public_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}. |

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}.

---

##### `minor_version_auto_upgrade`<sup>Required</sup> <a name="minor_version_auto_upgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade"></a>

```python
minor_version_auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings"></a>

```python
protected_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}.

---

##### `public_settings`<sup>Optional</sup> <a name="public_settings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings"></a>

```python
public_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}.

---

### StatefulNodeAzureHealth <a name="StatefulNodeAzureHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureHealth(
  auto_healing: typing.Union[bool, IResolvable],
  health_check_types: typing.List[str],
  grace_period: typing.Union[int, float] = None,
  unhealthy_duration: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes">health_check_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration">unhealthy_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}. |

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}.

---

##### `health_check_types`<sup>Required</sup> <a name="health_check_types" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes"></a>

```python
health_check_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}.

---

##### `unhealthy_duration`<sup>Optional</sup> <a name="unhealthy_duration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration"></a>

```python
unhealthy_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}.

---

### StatefulNodeAzureImage <a name="StatefulNodeAzureImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImage(
  custom_image: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageCustomImage]] = None,
  gallery: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageGallery]] = None,
  marketplace_image: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageMarketplaceImage]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage">custom_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]</code> | custom_image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery">gallery</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]</code> | gallery block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage">marketplace_image</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]</code> | marketplace_image block. |

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage"></a>

```python
custom_image: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}

---

##### `gallery`<sup>Optional</sup> <a name="gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery"></a>

```python
gallery: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageGallery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]

gallery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery StatefulNodeAzure#gallery}

---

##### `marketplace_image`<sup>Optional</sup> <a name="marketplace_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage"></a>

```python
marketplace_image: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageMarketplaceImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]

marketplace_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}

---

### StatefulNodeAzureImageCustomImage <a name="StatefulNodeAzureImageCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageCustomImage(
  custom_image_resource_group_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName">custom_image_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |

---

##### `custom_image_resource_group_name`<sup>Required</sup> <a name="custom_image_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName"></a>

```python
custom_image_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

### StatefulNodeAzureImageGallery <a name="StatefulNodeAzureImageGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageGallery(
  gallery_name: str,
  gallery_resource_group_name: str,
  image_name: str,
  version_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName">gallery_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}. |

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}.

---

##### `gallery_resource_group_name`<sup>Required</sup> <a name="gallery_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName"></a>

```python
gallery_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}.

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}.

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}.

---

### StatefulNodeAzureImageMarketplaceImage <a name="StatefulNodeAzureImageMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}.

---

### StatefulNodeAzureImportVm <a name="StatefulNodeAzureImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImportVm(
  original_vm_name: str,
  resource_group_name: str,
  draining_timeout: typing.Union[int, float] = None,
  resources_retention_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName">original_vm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime">resources_retention_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}. |

---

##### `original_vm_name`<sup>Required</sup> <a name="original_vm_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName"></a>

```python
original_vm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `resources_retention_time`<sup>Optional</sup> <a name="resources_retention_time" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime"></a>

```python
resources_retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}.

---

### StatefulNodeAzureLoadBalancer <a name="StatefulNodeAzureLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureLoadBalancer(
  backend_pool_names: typing.List[str],
  name: str,
  resource_group_name: str,
  type: str,
  sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames">backend_pool_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}. |

---

##### `backend_pool_names`<sup>Required</sup> <a name="backend_pool_names" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames"></a>

```python
backend_pool_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

### StatefulNodeAzureLogin <a name="StatefulNodeAzureLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureLogin(
  user_name: str,
  password: str = None,
  ssh_public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}. |

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}.

---

##### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}.

---

### StatefulNodeAzureManagedServiceIdentities <a name="StatefulNodeAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities(
  name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureNetwork <a name="StatefulNodeAzureNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetwork(
  network_interface: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterface]],
  network_resource_group_name: str,
  virtual_network_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}. |

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}.

---

### StatefulNodeAzureNetworkNetworkInterface <a name="StatefulNodeAzureNetworkNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface(
  is_primary: typing.Union[bool, IResolvable],
  subnet_name: str,
  additional_ip_configurations: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations]] = None,
  application_security_groups: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups]] = None,
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  network_security_group: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup]] = None,
  private_ip_addresses: typing.List[str] = None,
  public_ips: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfacePublicIps]] = None,
  public_ip_sku: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName">subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations">additional_ip_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]</code> | additional_ip_configurations block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups">application_security_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]</code> | application_security_groups block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup">network_security_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]</code> | network_security_group block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps">public_ips</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]</code> | public_ips block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku">public_ip_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}. |

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}.

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}.

---

##### `additional_ip_configurations`<sup>Optional</sup> <a name="additional_ip_configurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations"></a>

```python
additional_ip_configurations: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]

additional_ip_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#additional_ip_configurations StatefulNodeAzure#additional_ip_configurations}

---

##### `application_security_groups`<sup>Optional</sup> <a name="application_security_groups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups"></a>

```python
application_security_groups: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]

application_security_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#application_security_groups StatefulNodeAzure#application_security_groups}

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}.

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}.

---

##### `network_security_group`<sup>Optional</sup> <a name="network_security_group" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup"></a>

```python
network_security_group: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]

network_security_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_security_group StatefulNodeAzure#network_security_group}

---

##### `private_ip_addresses`<sup>Optional</sup> <a name="private_ip_addresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}.

---

##### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps"></a>

```python
public_ips: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfacePublicIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]

public_ips block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ips StatefulNodeAzure#public_ips}

---

##### `public_ip_sku`<sup>Optional</sup> <a name="public_ip_sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku"></a>

```python
public_ip_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}.

---

### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations(
  name: str,
  private_ip_address_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion">private_ip_address_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `private_ip_address_version`<sup>Required</sup> <a name="private_ip_address_version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion"></a>

```python
private_ip_address_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}.

---

### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups(
  name: str,
  network_resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup(
  name: str = None,
  network_resource_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `network_resource_group_name`<sup>Optional</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfacePublicIps <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps(
  name: str,
  network_resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureOsDisk <a name="StatefulNodeAzureOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureOsDisk(
  type: str,
  size_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

### StatefulNodeAzureSchedulingTask <a name="StatefulNodeAzureSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSchedulingTask(
  cron_expression: str,
  is_enabled: typing.Union[bool, IResolvable],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureSecret <a name="StatefulNodeAzureSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecret(
  source_vault: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretSourceVault]],
  vault_certificates: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretVaultCertificates]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault">source_vault</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]</code> | source_vault block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates">vault_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]</code> | vault_certificates block. |

---

##### `source_vault`<sup>Required</sup> <a name="source_vault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault"></a>

```python
source_vault: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretSourceVault]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]

source_vault block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#source_vault StatefulNodeAzure#source_vault}

---

##### `vault_certificates`<sup>Required</sup> <a name="vault_certificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates"></a>

```python
vault_certificates: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretVaultCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]

vault_certificates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#vault_certificates StatefulNodeAzure#vault_certificates}

---

### StatefulNodeAzureSecretSourceVault <a name="StatefulNodeAzureSecretSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretSourceVault(
  name: str,
  resource_group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureSecretVaultCertificates <a name="StatefulNodeAzureSecretVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates(
  certificate_store: str = None,
  certificate_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore">certificate_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl">certificate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}. |

---

##### `certificate_store`<sup>Optional</sup> <a name="certificate_store" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore"></a>

```python
certificate_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}.

---

##### `certificate_url`<sup>Optional</sup> <a name="certificate_url" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}.

---

### StatefulNodeAzureSignal <a name="StatefulNodeAzureSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSignal(
  timeout: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureStrategy <a name="StatefulNodeAzureStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureStrategy(
  fallback_to_on_demand: typing.Union[bool, IResolvable],
  draining_timeout: typing.Union[int, float] = None,
  optimization_windows: typing.List[str] = None,
  preferred_life_cycle: str = None,
  revert_to_spot: StatefulNodeAzureStrategyRevertToSpot = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand">fallback_to_on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows">optimization_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle">preferred_life_cycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot">revert_to_spot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | revert_to_spot block. |

---

##### `fallback_to_on_demand`<sup>Required</sup> <a name="fallback_to_on_demand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand"></a>

```python
fallback_to_on_demand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `optimization_windows`<sup>Optional</sup> <a name="optimization_windows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows"></a>

```python
optimization_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}.

---

##### `preferred_life_cycle`<sup>Optional</sup> <a name="preferred_life_cycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle"></a>

```python
preferred_life_cycle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}.

---

##### `revert_to_spot`<sup>Optional</sup> <a name="revert_to_spot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot"></a>

```python
revert_to_spot: StatefulNodeAzureStrategyRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}

---

### StatefulNodeAzureStrategyRevertToSpot <a name="StatefulNodeAzureStrategyRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot(
  perform_at: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt">perform_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}. |

---

##### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt"></a>

```python
perform_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}.

---

### StatefulNodeAzureTag <a name="StatefulNodeAzureTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureTag(
  tag_key: str,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}. |

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}.

---

### StatefulNodeAzureUpdateState <a name="StatefulNodeAzureUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureUpdateState(
  state: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}. |

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### StatefulNodeAzureAttachDataDiskList <a name="StatefulNodeAzureAttachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureAttachDataDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureAttachDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureAttachDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>]]

---


### StatefulNodeAzureAttachDataDiskOutputReference <a name="StatefulNodeAzureAttachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun">reset_lun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lun` <a name="reset_lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun"></a>

```python
def reset_lun() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput">data_disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">data_disk_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName">data_disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName">data_disk_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_disk_name_input`<sup>Optional</sup> <a name="data_disk_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput"></a>

```python
data_disk_name_input: str
```

- *Type:* str

---

##### `data_disk_resource_group_name_input`<sup>Optional</sup> <a name="data_disk_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```python
data_disk_resource_group_name_input: str
```

- *Type:* str

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `data_disk_name`<sup>Required</sup> <a name="data_disk_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName"></a>

```python
data_disk_name: str
```

- *Type:* str

---

##### `data_disk_resource_group_name`<sup>Required</sup> <a name="data_disk_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```python
data_disk_resource_group_name: str
```

- *Type:* str

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureAttachDataDisk, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk">StatefulNodeAzureAttachDataDisk</a>, cdktf.IResolvable]

---


### StatefulNodeAzureBootDiagnosticsList <a name="StatefulNodeAzureBootDiagnosticsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureBootDiagnosticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureBootDiagnostics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>]]

---


### StatefulNodeAzureBootDiagnosticsOutputReference <a name="StatefulNodeAzureBootDiagnosticsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl">reset_storage_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_storage_url` <a name="reset_storage_url" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl"></a>

```python
def reset_storage_url() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput">storage_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl">storage_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_url_input`<sup>Optional</sup> <a name="storage_url_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput"></a>

```python
storage_url_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_url`<sup>Required</sup> <a name="storage_url" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl"></a>

```python
storage_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureBootDiagnostics, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics">StatefulNodeAzureBootDiagnostics</a>, cdktf.IResolvable]

---


### StatefulNodeAzureDataDiskList <a name="StatefulNodeAzureDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDataDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>]]

---


### StatefulNodeAzureDataDiskOutputReference <a name="StatefulNodeAzureDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureDataDisk, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk">StatefulNodeAzureDataDisk</a>, cdktf.IResolvable]

---


### StatefulNodeAzureDeleteList <a name="StatefulNodeAzureDeleteList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDeleteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureDeleteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureDelete]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>]]

---


### StatefulNodeAzureDeleteOutputReference <a name="StatefulNodeAzureDeleteOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDeleteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours">reset_disk_ttl_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours">reset_network_ttl_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours">reset_public_ip_ttl_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours">reset_snapshot_ttl_in_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_ttl_in_hours` <a name="reset_disk_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours"></a>

```python
def reset_disk_ttl_in_hours() -> None
```

##### `reset_network_ttl_in_hours` <a name="reset_network_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours"></a>

```python
def reset_network_ttl_in_hours() -> None
```

##### `reset_public_ip_ttl_in_hours` <a name="reset_public_ip_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours"></a>

```python
def reset_public_ip_ttl_in_hours() -> None
```

##### `reset_snapshot_ttl_in_hours` <a name="reset_snapshot_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours"></a>

```python
def reset_snapshot_ttl_in_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput">disk_should_deallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput">disk_ttl_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput">network_should_deallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput">network_ttl_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput">public_ip_should_deallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput">public_ip_ttl_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput">should_terminate_vm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput">snapshot_should_deallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput">snapshot_ttl_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate">disk_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours">disk_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate">network_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours">network_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate">public_ip_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours">public_ip_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm">should_terminate_vm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate">snapshot_should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours">snapshot_ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_should_deallocate_input`<sup>Optional</sup> <a name="disk_should_deallocate_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput"></a>

```python
disk_should_deallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_ttl_in_hours_input`<sup>Optional</sup> <a name="disk_ttl_in_hours_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput"></a>

```python
disk_ttl_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_should_deallocate_input`<sup>Optional</sup> <a name="network_should_deallocate_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput"></a>

```python
network_should_deallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_ttl_in_hours_input`<sup>Optional</sup> <a name="network_ttl_in_hours_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput"></a>

```python
network_ttl_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ip_should_deallocate_input`<sup>Optional</sup> <a name="public_ip_should_deallocate_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput"></a>

```python
public_ip_should_deallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_ttl_in_hours_input`<sup>Optional</sup> <a name="public_ip_ttl_in_hours_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput"></a>

```python
public_ip_ttl_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `should_terminate_vm_input`<sup>Optional</sup> <a name="should_terminate_vm_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput"></a>

```python
should_terminate_vm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_should_deallocate_input`<sup>Optional</sup> <a name="snapshot_should_deallocate_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput"></a>

```python
snapshot_should_deallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_ttl_in_hours_input`<sup>Optional</sup> <a name="snapshot_ttl_in_hours_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput"></a>

```python
snapshot_ttl_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_should_deallocate`<sup>Required</sup> <a name="disk_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate"></a>

```python
disk_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_ttl_in_hours`<sup>Required</sup> <a name="disk_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours"></a>

```python
disk_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_should_deallocate`<sup>Required</sup> <a name="network_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate"></a>

```python
network_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_ttl_in_hours`<sup>Required</sup> <a name="network_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours"></a>

```python
network_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ip_should_deallocate`<sup>Required</sup> <a name="public_ip_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate"></a>

```python
public_ip_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_ttl_in_hours`<sup>Required</sup> <a name="public_ip_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours"></a>

```python
public_ip_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `should_terminate_vm`<sup>Required</sup> <a name="should_terminate_vm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm"></a>

```python
should_terminate_vm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_should_deallocate`<sup>Required</sup> <a name="snapshot_should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate"></a>

```python
snapshot_should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_ttl_in_hours`<sup>Required</sup> <a name="snapshot_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours"></a>

```python
snapshot_ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureDelete, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete">StatefulNodeAzureDelete</a>, cdktf.IResolvable]

---


### StatefulNodeAzureDetachDataDiskList <a name="StatefulNodeAzureDetachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDetachDataDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureDetachDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureDetachDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>]]

---


### StatefulNodeAzureDetachDataDiskOutputReference <a name="StatefulNodeAzureDetachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours">reset_ttl_in_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ttl_in_hours` <a name="reset_ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours"></a>

```python
def reset_ttl_in_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput">data_disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">data_disk_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput">should_deallocate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput">ttl_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName">data_disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName">data_disk_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate">should_deallocate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours">ttl_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_disk_name_input`<sup>Optional</sup> <a name="data_disk_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput"></a>

```python
data_disk_name_input: str
```

- *Type:* str

---

##### `data_disk_resource_group_name_input`<sup>Optional</sup> <a name="data_disk_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```python
data_disk_resource_group_name_input: str
```

- *Type:* str

---

##### `should_deallocate_input`<sup>Optional</sup> <a name="should_deallocate_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput"></a>

```python
should_deallocate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ttl_in_hours_input`<sup>Optional</sup> <a name="ttl_in_hours_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput"></a>

```python
ttl_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_disk_name`<sup>Required</sup> <a name="data_disk_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName"></a>

```python
data_disk_name: str
```

- *Type:* str

---

##### `data_disk_resource_group_name`<sup>Required</sup> <a name="data_disk_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```python
data_disk_resource_group_name: str
```

- *Type:* str

---

##### `should_deallocate`<sup>Required</sup> <a name="should_deallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate"></a>

```python
should_deallocate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ttl_in_hours`<sup>Required</sup> <a name="ttl_in_hours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours"></a>

```python
ttl_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureDetachDataDisk, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk">StatefulNodeAzureDetachDataDisk</a>, cdktf.IResolvable]

---


### StatefulNodeAzureExtensionList <a name="StatefulNodeAzureExtensionList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureExtensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>]]

---


### StatefulNodeAzureExtensionOutputReference <a name="StatefulNodeAzureExtensionOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings">reset_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings">reset_public_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_protected_settings` <a name="reset_protected_settings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings"></a>

```python
def reset_protected_settings() -> None
```

##### `reset_public_settings` <a name="reset_public_settings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings"></a>

```python
def reset_public_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput">minor_version_auto_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput">protected_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput">public_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade">minor_version_auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings">protected_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings">public_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `minor_version_auto_upgrade_input`<sup>Optional</sup> <a name="minor_version_auto_upgrade_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput"></a>

```python
minor_version_auto_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_settings_input`<sup>Optional</sup> <a name="protected_settings_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput"></a>

```python
protected_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `public_settings_input`<sup>Optional</sup> <a name="public_settings_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput"></a>

```python
public_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `minor_version_auto_upgrade`<sup>Required</sup> <a name="minor_version_auto_upgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade"></a>

```python
minor_version_auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings"></a>

```python
protected_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `public_settings`<sup>Required</sup> <a name="public_settings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings"></a>

```python
public_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureExtension, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension">StatefulNodeAzureExtension</a>, cdktf.IResolvable]

---


### StatefulNodeAzureHealthOutputReference <a name="StatefulNodeAzureHealthOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureHealthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration">reset_unhealthy_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```

##### `reset_unhealthy_duration` <a name="reset_unhealthy_duration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration"></a>

```python
def reset_unhealthy_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput">health_check_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput">unhealthy_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes">health_check_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration">unhealthy_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_types_input`<sup>Optional</sup> <a name="health_check_types_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput"></a>

```python
health_check_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unhealthy_duration_input`<sup>Optional</sup> <a name="unhealthy_duration_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput"></a>

```python
unhealthy_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_types`<sup>Required</sup> <a name="health_check_types" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes"></a>

```python
health_check_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unhealthy_duration`<sup>Required</sup> <a name="unhealthy_duration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration"></a>

```python
unhealthy_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---


### StatefulNodeAzureImageCustomImageList <a name="StatefulNodeAzureImageCustomImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageCustomImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureImageCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]

---


### StatefulNodeAzureImageCustomImageOutputReference <a name="StatefulNodeAzureImageCustomImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput">custom_image_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName">custom_image_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image_resource_group_name_input`<sup>Optional</sup> <a name="custom_image_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput"></a>

```python
custom_image_resource_group_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `custom_image_resource_group_name`<sup>Required</sup> <a name="custom_image_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName"></a>

```python
custom_image_resource_group_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureImageCustomImage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>, cdktf.IResolvable]

---


### StatefulNodeAzureImageGalleryList <a name="StatefulNodeAzureImageGalleryList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageGalleryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureImageGalleryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageGallery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]

---


### StatefulNodeAzureImageGalleryOutputReference <a name="StatefulNodeAzureImageGalleryOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput">gallery_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput">gallery_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName">gallery_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName">gallery_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gallery_name_input`<sup>Optional</sup> <a name="gallery_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput"></a>

```python
gallery_name_input: str
```

- *Type:* str

---

##### `gallery_resource_group_name_input`<sup>Optional</sup> <a name="gallery_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput"></a>

```python
gallery_resource_group_name_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

---

##### `gallery_resource_group_name`<sup>Required</sup> <a name="gallery_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName"></a>

```python
gallery_resource_group_name: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureImageGallery, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>, cdktf.IResolvable]

---


### StatefulNodeAzureImageMarketplaceImageList <a name="StatefulNodeAzureImageMarketplaceImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureImageMarketplaceImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageMarketplaceImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]

---


### StatefulNodeAzureImageMarketplaceImageOutputReference <a name="StatefulNodeAzureImageMarketplaceImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureImageMarketplaceImage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>, cdktf.IResolvable]

---


### StatefulNodeAzureImageOutputReference <a name="StatefulNodeAzureImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery">put_gallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage">put_marketplace_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery">reset_gallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage">reset_marketplace_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage"></a>

```python
def put_custom_image(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageCustomImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]

---

##### `put_gallery` <a name="put_gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery"></a>

```python
def put_gallery(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageGallery]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]

---

##### `put_marketplace_image` <a name="put_marketplace_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage"></a>

```python
def put_marketplace_image(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageMarketplaceImage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]

---

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_gallery` <a name="reset_gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery"></a>

```python
def reset_gallery() -> None
```

##### `reset_marketplace_image` <a name="reset_marketplace_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage"></a>

```python
def reset_marketplace_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery">gallery</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage">marketplace_image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput">custom_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput">gallery_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput">marketplace_image_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage"></a>

```python
custom_image: StatefulNodeAzureImageCustomImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a>

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery"></a>

```python
gallery: StatefulNodeAzureImageGalleryList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a>

---

##### `marketplace_image`<sup>Required</sup> <a name="marketplace_image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage"></a>

```python
marketplace_image: StatefulNodeAzureImageMarketplaceImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a>

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput"></a>

```python
custom_image_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageCustomImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage">StatefulNodeAzureImageCustomImage</a>]]

---

##### `gallery_input`<sup>Optional</sup> <a name="gallery_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput"></a>

```python
gallery_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageGallery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery">StatefulNodeAzureImageGallery</a>]]

---

##### `marketplace_image_input`<sup>Optional</sup> <a name="marketplace_image_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput"></a>

```python
marketplace_image_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureImageMarketplaceImage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage">StatefulNodeAzureImageMarketplaceImage</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureImage
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---


### StatefulNodeAzureImportVmList <a name="StatefulNodeAzureImportVmList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImportVmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureImportVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureImportVm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>]]

---


### StatefulNodeAzureImportVmOutputReference <a name="StatefulNodeAzureImportVmOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureImportVmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime">reset_resources_retention_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_resources_retention_time` <a name="reset_resources_retention_time" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime"></a>

```python
def reset_resources_retention_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput">original_vm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput">resources_retention_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName">original_vm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime">resources_retention_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `original_vm_name_input`<sup>Optional</sup> <a name="original_vm_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput"></a>

```python
original_vm_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `resources_retention_time_input`<sup>Optional</sup> <a name="resources_retention_time_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput"></a>

```python
resources_retention_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `original_vm_name`<sup>Required</sup> <a name="original_vm_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName"></a>

```python
original_vm_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `resources_retention_time`<sup>Required</sup> <a name="resources_retention_time" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime"></a>

```python
resources_retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureImportVm, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm">StatefulNodeAzureImportVm</a>, cdktf.IResolvable]

---


### StatefulNodeAzureLoadBalancerList <a name="StatefulNodeAzureLoadBalancerList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureLoadBalancerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>]]

---


### StatefulNodeAzureLoadBalancerOutputReference <a name="StatefulNodeAzureLoadBalancerOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku">reset_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku"></a>

```python
def reset_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput">backend_pool_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames">backend_pool_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_pool_names_input`<sup>Optional</sup> <a name="backend_pool_names_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput"></a>

```python
backend_pool_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `backend_pool_names`<sup>Required</sup> <a name="backend_pool_names" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames"></a>

```python
backend_pool_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureLoadBalancer, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer">StatefulNodeAzureLoadBalancer</a>, cdktf.IResolvable]

---


### StatefulNodeAzureLoginOutputReference <a name="StatefulNodeAzureLoginOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureLoginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey">reset_ssh_public_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_ssh_public_key` <a name="reset_ssh_public_key" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey"></a>

```python
def reset_ssh_public_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput">ssh_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `ssh_public_key_input`<sup>Optional</sup> <a name="ssh_public_key_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```python
ssh_public_key_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---


### StatefulNodeAzureManagedServiceIdentitiesList <a name="StatefulNodeAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureManagedServiceIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureManagedServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>]]

---


### StatefulNodeAzureManagedServiceIdentitiesOutputReference <a name="StatefulNodeAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureManagedServiceIdentities, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities">StatefulNodeAzureManagedServiceIdentities</a>, cdktf.IResolvable]

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput">private_ip_address_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion">private_ip_address_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_address_version_input`<sup>Optional</sup> <a name="private_ip_address_version_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput"></a>

```python
private_ip_address_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_address_version`<sup>Required</sup> <a name="private_ip_address_version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion"></a>

```python
private_ip_address_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>, cdktf.IResolvable]

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput">network_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_resource_group_name_input`<sup>Optional</sup> <a name="network_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput"></a>

```python
network_resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>, cdktf.IResolvable]

---


### StatefulNodeAzureNetworkNetworkInterfaceList <a name="StatefulNodeAzureNetworkNetworkInterfaceList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureNetworkNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName">reset_network_resource_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_resource_group_name` <a name="reset_network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName"></a>

```python
def reset_network_resource_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput">network_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_resource_group_name_input`<sup>Optional</sup> <a name="network_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput"></a>

```python
network_resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>, cdktf.IResolvable]

---


### StatefulNodeAzureNetworkNetworkInterfaceOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations">put_additional_ip_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups">put_application_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup">put_network_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps">put_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations">reset_additional_ip_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups">reset_application_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding">reset_enable_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup">reset_network_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses">reset_private_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps">reset_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku">reset_public_ip_sku</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_ip_configurations` <a name="put_additional_ip_configurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations"></a>

```python
def put_additional_ip_configurations(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]

---

##### `put_application_security_groups` <a name="put_application_security_groups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups"></a>

```python
def put_application_security_groups(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]

---

##### `put_network_security_group` <a name="put_network_security_group" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup"></a>

```python
def put_network_security_group(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]

---

##### `put_public_ips` <a name="put_public_ips" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps"></a>

```python
def put_public_ips(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfacePublicIps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]

---

##### `reset_additional_ip_configurations` <a name="reset_additional_ip_configurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations"></a>

```python
def reset_additional_ip_configurations() -> None
```

##### `reset_application_security_groups` <a name="reset_application_security_groups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups"></a>

```python
def reset_application_security_groups() -> None
```

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_enable_ip_forwarding` <a name="reset_enable_ip_forwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```python
def reset_enable_ip_forwarding() -> None
```

##### `reset_network_security_group` <a name="reset_network_security_group" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup"></a>

```python
def reset_network_security_group() -> None
```

##### `reset_private_ip_addresses` <a name="reset_private_ip_addresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses"></a>

```python
def reset_private_ip_addresses() -> None
```

##### `reset_public_ips` <a name="reset_public_ips" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps"></a>

```python
def reset_public_ips() -> None
```

##### `reset_public_ip_sku` <a name="reset_public_ip_sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku"></a>

```python
def reset_public_ip_sku() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations">additional_ip_configurations</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups">application_security_groups</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup">network_security_group</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps">public_ips</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput">additional_ip_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput">application_security_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput">enable_ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput">is_primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput">network_security_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput">private_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput">public_ips_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput">public_ip_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput">subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku">public_ip_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_ip_configurations`<sup>Required</sup> <a name="additional_ip_configurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations"></a>

```python
additional_ip_configurations: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a>

---

##### `application_security_groups`<sup>Required</sup> <a name="application_security_groups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups"></a>

```python
application_security_groups: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a>

---

##### `network_security_group`<sup>Required</sup> <a name="network_security_group" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup"></a>

```python
network_security_group: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a>

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps"></a>

```python
public_ips: StatefulNodeAzureNetworkNetworkInterfacePublicIpsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a>

---

##### `additional_ip_configurations_input`<sup>Optional</sup> <a name="additional_ip_configurations_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput"></a>

```python
additional_ip_configurations_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations</a>]]

---

##### `application_security_groups_input`<sup>Optional</sup> <a name="application_security_groups_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput"></a>

```python
application_security_groups_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups</a>]]

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding_input`<sup>Optional</sup> <a name="enable_ip_forwarding_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```python
enable_ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary_input`<sup>Optional</sup> <a name="is_primary_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```python
is_primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_security_group_input`<sup>Optional</sup> <a name="network_security_group_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput"></a>

```python
network_security_group_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup</a>]]

---

##### `private_ip_addresses_input`<sup>Optional</sup> <a name="private_ip_addresses_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput"></a>

```python
private_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_ips_input`<sup>Optional</sup> <a name="public_ips_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput"></a>

```python
public_ips_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfacePublicIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]

---

##### `public_ip_sku_input`<sup>Optional</sup> <a name="public_ip_sku_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput"></a>

```python
public_ip_sku_input: str
```

- *Type:* str

---

##### `subnet_name_input`<sup>Optional</sup> <a name="subnet_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput"></a>

```python
subnet_name_input: str
```

- *Type:* str

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding`<sup>Required</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_ip_sku`<sup>Required</sup> <a name="public_ip_sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku"></a>

```python
public_ip_sku: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureNetworkNetworkInterface, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>, cdktf.IResolvable]

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsList <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterfacePublicIps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>]]

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput">network_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_resource_group_name_input`<sup>Optional</sup> <a name="network_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput"></a>

```python
network_resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureNetworkNetworkInterfacePublicIps, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps">StatefulNodeAzureNetworkNetworkInterfacePublicIps</a>, cdktf.IResolvable]

---


### StatefulNodeAzureNetworkOutputReference <a name="StatefulNodeAzureNetworkOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface">put_network_interface</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput">network_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput">virtual_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName">network_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface"></a>

```python
network_interface: StatefulNodeAzureNetworkNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a>

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureNetworkNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface">StatefulNodeAzureNetworkNetworkInterface</a>]]

---

##### `network_resource_group_name_input`<sup>Optional</sup> <a name="network_resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput"></a>

```python
network_resource_group_name_input: str
```

- *Type:* str

---

##### `virtual_network_name_input`<sup>Optional</sup> <a name="virtual_network_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```python
virtual_network_name_input: str
```

- *Type:* str

---

##### `network_resource_group_name`<sup>Required</sup> <a name="network_resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName"></a>

```python
network_resource_group_name: str
```

- *Type:* str

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---


### StatefulNodeAzureOsDiskOutputReference <a name="StatefulNodeAzureOsDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb">reset_size_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size_gb` <a name="reset_size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb"></a>

```python
def reset_size_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---


### StatefulNodeAzureSchedulingTaskList <a name="StatefulNodeAzureSchedulingTaskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSchedulingTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSchedulingTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>]]

---


### StatefulNodeAzureSchedulingTaskOutputReference <a name="StatefulNodeAzureSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureSchedulingTask, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask">StatefulNodeAzureSchedulingTask</a>, cdktf.IResolvable]

---


### StatefulNodeAzureSecretList <a name="StatefulNodeAzureSecretList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>]]

---


### StatefulNodeAzureSecretOutputReference <a name="StatefulNodeAzureSecretOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault">put_source_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates">put_vault_certificates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_vault` <a name="put_source_vault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault"></a>

```python
def put_source_vault(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretSourceVault]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]

---

##### `put_vault_certificates` <a name="put_vault_certificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates"></a>

```python
def put_vault_certificates(
  value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretVaultCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault">source_vault</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates">vault_certificates</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput">source_vault_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput">vault_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_vault`<sup>Required</sup> <a name="source_vault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault"></a>

```python
source_vault: StatefulNodeAzureSecretSourceVaultList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a>

---

##### `vault_certificates`<sup>Required</sup> <a name="vault_certificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates"></a>

```python
vault_certificates: StatefulNodeAzureSecretVaultCertificatesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a>

---

##### `source_vault_input`<sup>Optional</sup> <a name="source_vault_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput"></a>

```python
source_vault_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretSourceVault]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]

---

##### `vault_certificates_input`<sup>Optional</sup> <a name="vault_certificates_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput"></a>

```python
vault_certificates_input: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretVaultCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureSecret, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret">StatefulNodeAzureSecret</a>, cdktf.IResolvable]

---


### StatefulNodeAzureSecretSourceVaultList <a name="StatefulNodeAzureSecretSourceVaultList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureSecretSourceVaultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretSourceVault]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>]]

---


### StatefulNodeAzureSecretSourceVaultOutputReference <a name="StatefulNodeAzureSecretSourceVaultOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureSecretSourceVault, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault">StatefulNodeAzureSecretSourceVault</a>, cdktf.IResolvable]

---


### StatefulNodeAzureSecretVaultCertificatesList <a name="StatefulNodeAzureSecretVaultCertificatesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureSecretVaultCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSecretVaultCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>]]

---


### StatefulNodeAzureSecretVaultCertificatesOutputReference <a name="StatefulNodeAzureSecretVaultCertificatesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore">reset_certificate_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl">reset_certificate_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_store` <a name="reset_certificate_store" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore"></a>

```python
def reset_certificate_store() -> None
```

##### `reset_certificate_url` <a name="reset_certificate_url" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl"></a>

```python
def reset_certificate_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput">certificate_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput">certificate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore">certificate_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl">certificate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_input`<sup>Optional</sup> <a name="certificate_store_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```python
certificate_store_input: str
```

- *Type:* str

---

##### `certificate_url_input`<sup>Optional</sup> <a name="certificate_url_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```python
certificate_url_input: str
```

- *Type:* str

---

##### `certificate_store`<sup>Required</sup> <a name="certificate_store" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore"></a>

```python
certificate_store: str
```

- *Type:* str

---

##### `certificate_url`<sup>Required</sup> <a name="certificate_url" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureSecretVaultCertificates, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates">StatefulNodeAzureSecretVaultCertificates</a>, cdktf.IResolvable]

---


### StatefulNodeAzureSignalList <a name="StatefulNodeAzureSignalList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSignalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureSignalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureSignal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>]]

---


### StatefulNodeAzureSignalOutputReference <a name="StatefulNodeAzureSignalOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureSignalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureSignal, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal">StatefulNodeAzureSignal</a>, cdktf.IResolvable]

---


### StatefulNodeAzureStrategyOutputReference <a name="StatefulNodeAzureStrategyOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot">put_revert_to_spot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows">reset_optimization_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle">reset_preferred_life_cycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot">reset_revert_to_spot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_revert_to_spot` <a name="put_revert_to_spot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot"></a>

```python
def put_revert_to_spot(
  perform_at: str
) -> None
```

###### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot.parameter.performAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}.

---

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_optimization_windows` <a name="reset_optimization_windows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows"></a>

```python
def reset_optimization_windows() -> None
```

##### `reset_preferred_life_cycle` <a name="reset_preferred_life_cycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle"></a>

```python
def reset_preferred_life_cycle() -> None
```

##### `reset_revert_to_spot` <a name="reset_revert_to_spot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot"></a>

```python
def reset_revert_to_spot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot">revert_to_spot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput">fallback_to_on_demand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput">optimization_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput">preferred_life_cycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput">revert_to_spot_input</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand">fallback_to_on_demand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows">optimization_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle">preferred_life_cycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revert_to_spot`<sup>Required</sup> <a name="revert_to_spot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot"></a>

```python
revert_to_spot: StatefulNodeAzureStrategyRevertToSpotOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a>

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_on_demand_input`<sup>Optional</sup> <a name="fallback_to_on_demand_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput"></a>

```python
fallback_to_on_demand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optimization_windows_input`<sup>Optional</sup> <a name="optimization_windows_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput"></a>

```python
optimization_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_life_cycle_input`<sup>Optional</sup> <a name="preferred_life_cycle_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput"></a>

```python
preferred_life_cycle_input: str
```

- *Type:* str

---

##### `revert_to_spot_input`<sup>Optional</sup> <a name="revert_to_spot_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput"></a>

```python
revert_to_spot_input: StatefulNodeAzureStrategyRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_on_demand`<sup>Required</sup> <a name="fallback_to_on_demand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand"></a>

```python
fallback_to_on_demand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optimization_windows`<sup>Required</sup> <a name="optimization_windows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows"></a>

```python
optimization_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_life_cycle`<sup>Required</sup> <a name="preferred_life_cycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle"></a>

```python
preferred_life_cycle: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---


### StatefulNodeAzureStrategyRevertToSpotOutputReference <a name="StatefulNodeAzureStrategyRevertToSpotOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput">perform_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt">perform_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `perform_at_input`<sup>Optional</sup> <a name="perform_at_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput"></a>

```python
perform_at_input: str
```

- *Type:* str

---

##### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt"></a>

```python
perform_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue"></a>

```python
internal_value: StatefulNodeAzureStrategyRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---


### StatefulNodeAzureTagList <a name="StatefulNodeAzureTagList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>]]

---


### StatefulNodeAzureTagOutputReference <a name="StatefulNodeAzureTagOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag">StatefulNodeAzureTag</a>, cdktf.IResolvable]

---


### StatefulNodeAzureUpdateStateList <a name="StatefulNodeAzureUpdateStateList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureUpdateStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatefulNodeAzureUpdateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StatefulNodeAzureUpdateState]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>]]

---


### StatefulNodeAzureUpdateStateOutputReference <a name="StatefulNodeAzureUpdateStateOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import stateful_node_azure

statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StatefulNodeAzureUpdateState, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState">StatefulNodeAzureUpdateState</a>, cdktf.IResolvable]

---


