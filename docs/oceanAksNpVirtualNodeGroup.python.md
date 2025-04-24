# `oceanAksNpVirtualNodeGroup` Submodule <a name="`oceanAksNpVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNpVirtualNodeGroup <a name="OceanAksNpVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group spotinst_ocean_aks_np_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ocean_id: str,
  availability_zones: typing.List[str] = None,
  enable_node_public_ip: typing.Union[bool, IResolvable] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  filters: OceanAksNpVirtualNodeGroupFilters = None,
  headrooms: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupHeadrooms]] = None,
  id: str = None,
  kubernetes_version: str = None,
  labels: typing.Mapping[str] = None,
  linux_os_config: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfig]] = None,
  max_count: typing.Union[int, float] = None,
  max_pods_per_node: typing.Union[int, float] = None,
  min_count: typing.Union[int, float] = None,
  os_disk_size_gb: typing.Union[int, float] = None,
  os_disk_type: str = None,
  os_sku: str = None,
  os_type: str = None,
  pod_subnet_ids: typing.List[str] = None,
  scheduling: OceanAksNpVirtualNodeGroupScheduling = None,
  spot_percentage: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupTaints]] = None,
  update_policy: OceanAksNpVirtualNodeGroupUpdatePolicy = None,
  vnet_subnet_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.oceanId">ocean_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.enableNodePublicIp">enable_node_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.headrooms">headrooms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]</code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#kubernetes_version OceanAksNpVirtualNodeGroup#kubernetes_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.linuxOsConfig">linux_os_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]</code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskType">os_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osSku">os_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_sku OceanAksNpVirtualNodeGroup#os_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.podSubnetIds">pod_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#pod_subnet_ids OceanAksNpVirtualNodeGroup#pod_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.vnetSubnetIds">vnet_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vnet_subnet_ids OceanAksNpVirtualNodeGroup#vnet_subnet_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}.

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.oceanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}.

---

##### `enable_node_public_ip`<sup>Optional</sup> <a name="enable_node_public_ip" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.enableNodePublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#filters OceanAksNpVirtualNodeGroup#filters}

---

##### `headrooms`<sup>Optional</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.headrooms"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]

headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#headrooms OceanAksNpVirtualNodeGroup#headrooms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes_version`<sup>Optional</sup> <a name="kubernetes_version" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.kubernetesVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#kubernetes_version OceanAksNpVirtualNodeGroup#kubernetes_version}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}.

---

##### `linux_os_config`<sup>Optional</sup> <a name="linux_os_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.linuxOsConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#linux_os_config OceanAksNpVirtualNodeGroup#linux_os_config}

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}.

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.maxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}.

---

##### `min_count`<sup>Optional</sup> <a name="min_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.minCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}.

---

##### `os_disk_size_gb`<sup>Optional</sup> <a name="os_disk_size_gb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}.

---

##### `os_disk_type`<sup>Optional</sup> <a name="os_disk_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osDiskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}.

---

##### `os_sku`<sup>Optional</sup> <a name="os_sku" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_sku OceanAksNpVirtualNodeGroup#os_sku}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}.

---

##### `pod_subnet_ids`<sup>Optional</sup> <a name="pod_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.podSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#pod_subnet_ids OceanAksNpVirtualNodeGroup#pod_subnet_ids}.

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#scheduling OceanAksNpVirtualNodeGroup#scheduling}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.spotPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#taints OceanAksNpVirtualNodeGroup#taints}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#update_policy OceanAksNpVirtualNodeGroup#update_policy}

---

##### `vnet_subnet_ids`<sup>Optional</sup> <a name="vnet_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.Initializer.parameter.vnetSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vnet_subnet_ids OceanAksNpVirtualNodeGroup#vnet_subnet_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putHeadrooms">put_headrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putLinuxOsConfig">put_linux_os_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putScheduling">put_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetEnableNodePublicIp">reset_enable_node_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetFallbackToOndemand">reset_fallback_to_ondemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetHeadrooms">reset_headrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetKubernetesVersion">reset_kubernetes_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetLinuxOsConfig">reset_linux_os_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxCount">reset_max_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxPodsPerNode">reset_max_pods_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMinCount">reset_min_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskSizeGb">reset_os_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskType">reset_os_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsSku">reset_os_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetPodSubnetIds">reset_pod_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetScheduling">reset_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetSpotPercentage">reset_spot_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTaints">reset_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetVnetSubnetIds">reset_vnet_subnet_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters"></a>

```python
def put_filters(
  accelerated_networking: str = None,
  architectures: typing.List[str] = None,
  disk_performance: str = None,
  exclude_series: typing.List[str] = None,
  gpu_types: typing.List[str] = None,
  max_gpu: typing.Union[int, float] = None,
  max_memory_gib: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None,
  min_disk: typing.Union[int, float] = None,
  min_gpu: typing.Union[int, float] = None,
  min_memory_gib: typing.Union[int, float] = None,
  min_nics: typing.Union[int, float] = None,
  min_vcpu: typing.Union[int, float] = None,
  series: typing.List[str] = None,
  vm_types: typing.List[str] = None
) -> None
```

###### `accelerated_networking`<sup>Optional</sup> <a name="accelerated_networking" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.acceleratedNetworking"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#accelerated_networking OceanAksNpVirtualNodeGroup#accelerated_networking}.

---

###### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.architectures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#architectures OceanAksNpVirtualNodeGroup#architectures}.

---

###### `disk_performance`<sup>Optional</sup> <a name="disk_performance" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.diskPerformance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#disk_performance OceanAksNpVirtualNodeGroup#disk_performance}.

---

###### `exclude_series`<sup>Optional</sup> <a name="exclude_series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.excludeSeries"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#exclude_series OceanAksNpVirtualNodeGroup#exclude_series}.

---

###### `gpu_types`<sup>Optional</sup> <a name="gpu_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.gpuTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#gpu_types OceanAksNpVirtualNodeGroup#gpu_types}.

---

###### `max_gpu`<sup>Optional</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.maxGpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_gpu OceanAksNpVirtualNodeGroup#max_gpu}.

---

###### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.maxMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_memory_gib OceanAksNpVirtualNodeGroup#max_memory_gib}.

---

###### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.maxVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_vcpu OceanAksNpVirtualNodeGroup#max_vcpu}.

---

###### `min_disk`<sup>Optional</sup> <a name="min_disk" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.minDisk"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_disk OceanAksNpVirtualNodeGroup#min_disk}.

---

###### `min_gpu`<sup>Optional</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.minGpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_gpu OceanAksNpVirtualNodeGroup#min_gpu}.

---

###### `min_memory_gib`<sup>Optional</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.minMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_memory_gib OceanAksNpVirtualNodeGroup#min_memory_gib}.

---

###### `min_nics`<sup>Optional</sup> <a name="min_nics" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.minNics"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_nics OceanAksNpVirtualNodeGroup#min_nics}.

---

###### `min_vcpu`<sup>Optional</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.minVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_vcpu OceanAksNpVirtualNodeGroup#min_vcpu}.

---

###### `series`<sup>Optional</sup> <a name="series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.series"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#series OceanAksNpVirtualNodeGroup#series}.

---

###### `vm_types`<sup>Optional</sup> <a name="vm_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putFilters.parameter.vmTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vm_types OceanAksNpVirtualNodeGroup#vm_types}.

---

##### `put_headrooms` <a name="put_headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putHeadrooms"></a>

```python
def put_headrooms(
  value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupHeadrooms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putHeadrooms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]

---

##### `put_linux_os_config` <a name="put_linux_os_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putLinuxOsConfig"></a>

```python
def put_linux_os_config(
  value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putLinuxOsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]

---

##### `put_scheduling` <a name="put_scheduling" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putScheduling"></a>

```python
def put_scheduling(
  shutdown_hours: OceanAksNpVirtualNodeGroupSchedulingShutdownHours = None
) -> None
```

###### `shutdown_hours`<sup>Optional</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putScheduling.parameter.shutdownHours"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#shutdown_hours OceanAksNpVirtualNodeGroup#shutdown_hours}

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupTaints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putUpdatePolicy"></a>

```python
def put_update_policy(
  should_roll: typing.Union[bool, IResolvable],
  conditioned_roll: typing.Union[bool, IResolvable] = None,
  roll_config: OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig = None
) -> None
```

###### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putUpdatePolicy.parameter.shouldRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#should_roll OceanAksNpVirtualNodeGroup#should_roll}.

---

###### `conditioned_roll`<sup>Optional</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putUpdatePolicy.parameter.conditionedRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#conditioned_roll OceanAksNpVirtualNodeGroup#conditioned_roll}.

---

###### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.putUpdatePolicy.parameter.rollConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#roll_config OceanAksNpVirtualNodeGroup#roll_config}

---

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_enable_node_public_ip` <a name="reset_enable_node_public_ip" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetEnableNodePublicIp"></a>

```python
def reset_enable_node_public_ip() -> None
```

##### `reset_fallback_to_ondemand` <a name="reset_fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetFallbackToOndemand"></a>

```python
def reset_fallback_to_ondemand() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_headrooms` <a name="reset_headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetHeadrooms"></a>

```python
def reset_headrooms() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kubernetes_version` <a name="reset_kubernetes_version" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetKubernetesVersion"></a>

```python
def reset_kubernetes_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_linux_os_config` <a name="reset_linux_os_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetLinuxOsConfig"></a>

```python
def reset_linux_os_config() -> None
```

##### `reset_max_count` <a name="reset_max_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxCount"></a>

```python
def reset_max_count() -> None
```

##### `reset_max_pods_per_node` <a name="reset_max_pods_per_node" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMaxPodsPerNode"></a>

```python
def reset_max_pods_per_node() -> None
```

##### `reset_min_count` <a name="reset_min_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetMinCount"></a>

```python
def reset_min_count() -> None
```

##### `reset_os_disk_size_gb` <a name="reset_os_disk_size_gb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskSizeGb"></a>

```python
def reset_os_disk_size_gb() -> None
```

##### `reset_os_disk_type` <a name="reset_os_disk_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsDiskType"></a>

```python
def reset_os_disk_type() -> None
```

##### `reset_os_sku` <a name="reset_os_sku" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsSku"></a>

```python
def reset_os_sku() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_pod_subnet_ids` <a name="reset_pod_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetPodSubnetIds"></a>

```python
def reset_pod_subnet_ids() -> None
```

##### `reset_scheduling` <a name="reset_scheduling" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetScheduling"></a>

```python
def reset_scheduling() -> None
```

##### `reset_spot_percentage` <a name="reset_spot_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetSpotPercentage"></a>

```python
def reset_spot_percentage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetTaints"></a>

```python
def reset_taints() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

##### `reset_vnet_subnet_ids` <a name="reset_vnet_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.resetVnetSubnetIds"></a>

```python
def reset_vnet_subnet_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceanAksNpVirtualNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceanAksNpVirtualNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceanAksNpVirtualNodeGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceanAksNpVirtualNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanAksNpVirtualNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference">OceanAksNpVirtualNodeGroupFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headrooms">headrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList">OceanAksNpVirtualNodeGroupHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.linuxOsConfig">linux_os_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList">OceanAksNpVirtualNodeGroupLinuxOsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference">OceanAksNpVirtualNodeGroupSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList">OceanAksNpVirtualNodeGroupTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference">OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIpInput">enable_node_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemandInput">fallback_to_ondemand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headroomsInput">headrooms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.kubernetesVersionInput">kubernetes_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.linuxOsConfigInput">linux_os_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCountInput">max_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNodeInput">max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCountInput">min_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanIdInput">ocean_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGbInput">os_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskTypeInput">os_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osSkuInput">os_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.podSubnetIdsInput">pod_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.schedulingInput">scheduling_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentageInput">spot_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.updatePolicyInput">update_policy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.vnetSubnetIdsInput">vnet_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIp">enable_node_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanId">ocean_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskType">os_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osSku">os_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.podSubnetIds">pod_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.vnetSubnetIds">vnet_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.filters"></a>

```python
filters: OceanAksNpVirtualNodeGroupFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference">OceanAksNpVirtualNodeGroupFiltersOutputReference</a>

---

##### `headrooms`<sup>Required</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headrooms"></a>

```python
headrooms: OceanAksNpVirtualNodeGroupHeadroomsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList">OceanAksNpVirtualNodeGroupHeadroomsList</a>

---

##### `linux_os_config`<sup>Required</sup> <a name="linux_os_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.linuxOsConfig"></a>

```python
linux_os_config: OceanAksNpVirtualNodeGroupLinuxOsConfigList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList">OceanAksNpVirtualNodeGroupLinuxOsConfigList</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.scheduling"></a>

```python
scheduling: OceanAksNpVirtualNodeGroupSchedulingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference">OceanAksNpVirtualNodeGroupSchedulingOutputReference</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taints"></a>

```python
taints: OceanAksNpVirtualNodeGroupTaintsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList">OceanAksNpVirtualNodeGroupTaintsList</a>

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.updatePolicy"></a>

```python
update_policy: OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference">OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference</a>

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_node_public_ip_input`<sup>Optional</sup> <a name="enable_node_public_ip_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIpInput"></a>

```python
enable_node_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fallback_to_ondemand_input`<sup>Optional</sup> <a name="fallback_to_ondemand_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemandInput"></a>

```python
fallback_to_ondemand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.filtersInput"></a>

```python
filters_input: OceanAksNpVirtualNodeGroupFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a>

---

##### `headrooms_input`<sup>Optional</sup> <a name="headrooms_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.headroomsInput"></a>

```python
headrooms_input: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupHeadrooms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_version_input`<sup>Optional</sup> <a name="kubernetes_version_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.kubernetesVersionInput"></a>

```python
kubernetes_version_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `linux_os_config_input`<sup>Optional</sup> <a name="linux_os_config_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.linuxOsConfigInput"></a>

```python
linux_os_config_input: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]

---

##### `max_count_input`<sup>Optional</sup> <a name="max_count_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCountInput"></a>

```python
max_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods_per_node_input`<sup>Optional</sup> <a name="max_pods_per_node_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNodeInput"></a>

```python
max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count_input`<sup>Optional</sup> <a name="min_count_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCountInput"></a>

```python
min_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ocean_id_input`<sup>Optional</sup> <a name="ocean_id_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanIdInput"></a>

```python
ocean_id_input: str
```

- *Type:* str

---

##### `os_disk_size_gb_input`<sup>Optional</sup> <a name="os_disk_size_gb_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGbInput"></a>

```python
os_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_disk_type_input`<sup>Optional</sup> <a name="os_disk_type_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskTypeInput"></a>

```python
os_disk_type_input: str
```

- *Type:* str

---

##### `os_sku_input`<sup>Optional</sup> <a name="os_sku_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osSkuInput"></a>

```python
os_sku_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `pod_subnet_ids_input`<sup>Optional</sup> <a name="pod_subnet_ids_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.podSubnetIdsInput"></a>

```python
pod_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_input`<sup>Optional</sup> <a name="scheduling_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.schedulingInput"></a>

```python
scheduling_input: OceanAksNpVirtualNodeGroupScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a>

---

##### `spot_percentage_input`<sup>Optional</sup> <a name="spot_percentage_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentageInput"></a>

```python
spot_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.updatePolicyInput"></a>

```python
update_policy_input: OceanAksNpVirtualNodeGroupUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a>

---

##### `vnet_subnet_ids_input`<sup>Optional</sup> <a name="vnet_subnet_ids_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.vnetSubnetIdsInput"></a>

```python
vnet_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_node_public_ip`<sup>Required</sup> <a name="enable_node_public_ip" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.enableNodePublicIp"></a>

```python
enable_node_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fallback_to_ondemand`<sup>Required</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count`<sup>Required</sup> <a name="min_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.oceanId"></a>

```python
ocean_id: str
```

- *Type:* str

---

##### `os_disk_size_gb`<sup>Required</sup> <a name="os_disk_size_gb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskSizeGb"></a>

```python
os_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_disk_type`<sup>Required</sup> <a name="os_disk_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osDiskType"></a>

```python
os_disk_type: str
```

- *Type:* str

---

##### `os_sku`<sup>Required</sup> <a name="os_sku" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osSku"></a>

```python
os_sku: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `pod_subnet_ids`<sup>Required</sup> <a name="pod_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.podSubnetIds"></a>

```python
pod_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_percentage`<sup>Required</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vnet_subnet_ids`<sup>Required</sup> <a name="vnet_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.vnetSubnetIds"></a>

```python
vnet_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpVirtualNodeGroupConfig <a name="OceanAksNpVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ocean_id: str,
  availability_zones: typing.List[str] = None,
  enable_node_public_ip: typing.Union[bool, IResolvable] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  filters: OceanAksNpVirtualNodeGroupFilters = None,
  headrooms: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupHeadrooms]] = None,
  id: str = None,
  kubernetes_version: str = None,
  labels: typing.Mapping[str] = None,
  linux_os_config: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfig]] = None,
  max_count: typing.Union[int, float] = None,
  max_pods_per_node: typing.Union[int, float] = None,
  min_count: typing.Union[int, float] = None,
  os_disk_size_gb: typing.Union[int, float] = None,
  os_disk_type: str = None,
  os_sku: str = None,
  os_type: str = None,
  pod_subnet_ids: typing.List[str] = None,
  scheduling: OceanAksNpVirtualNodeGroupScheduling = None,
  spot_percentage: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupTaints]] = None,
  update_policy: OceanAksNpVirtualNodeGroupUpdatePolicy = None,
  vnet_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.oceanId">ocean_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.enableNodePublicIp">enable_node_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.headrooms">headrooms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]</code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#kubernetes_version OceanAksNpVirtualNodeGroup#kubernetes_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.linuxOsConfig">linux_os_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]</code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskType">os_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osSku">os_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_sku OceanAksNpVirtualNodeGroup#os_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.podSubnetIds">pod_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#pod_subnet_ids OceanAksNpVirtualNodeGroup#pod_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.vnetSubnetIds">vnet_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vnet_subnet_ids OceanAksNpVirtualNodeGroup#vnet_subnet_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#name OceanAksNpVirtualNodeGroup#name}.

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.oceanId"></a>

```python
ocean_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#ocean_id OceanAksNpVirtualNodeGroup#ocean_id}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#availability_zones OceanAksNpVirtualNodeGroup#availability_zones}.

---

##### `enable_node_public_ip`<sup>Optional</sup> <a name="enable_node_public_ip" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.enableNodePublicIp"></a>

```python
enable_node_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#enable_node_public_ip OceanAksNpVirtualNodeGroup#enable_node_public_ip}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#fallback_to_ondemand OceanAksNpVirtualNodeGroup#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.filters"></a>

```python
filters: OceanAksNpVirtualNodeGroupFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#filters OceanAksNpVirtualNodeGroup#filters}

---

##### `headrooms`<sup>Optional</sup> <a name="headrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.headrooms"></a>

```python
headrooms: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupHeadrooms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]

headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#headrooms OceanAksNpVirtualNodeGroup#headrooms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#id OceanAksNpVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes_version`<sup>Optional</sup> <a name="kubernetes_version" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#kubernetes_version OceanAksNpVirtualNodeGroup#kubernetes_version}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#labels OceanAksNpVirtualNodeGroup#labels}.

---

##### `linux_os_config`<sup>Optional</sup> <a name="linux_os_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.linuxOsConfig"></a>

```python
linux_os_config: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#linux_os_config OceanAksNpVirtualNodeGroup#linux_os_config}

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_count OceanAksNpVirtualNodeGroup#max_count}.

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_pods_per_node OceanAksNpVirtualNodeGroup#max_pods_per_node}.

---

##### `min_count`<sup>Optional</sup> <a name="min_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_count OceanAksNpVirtualNodeGroup#min_count}.

---

##### `os_disk_size_gb`<sup>Optional</sup> <a name="os_disk_size_gb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskSizeGb"></a>

```python
os_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_size_gb OceanAksNpVirtualNodeGroup#os_disk_size_gb}.

---

##### `os_disk_type`<sup>Optional</sup> <a name="os_disk_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osDiskType"></a>

```python
os_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_disk_type OceanAksNpVirtualNodeGroup#os_disk_type}.

---

##### `os_sku`<sup>Optional</sup> <a name="os_sku" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osSku"></a>

```python
os_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_sku OceanAksNpVirtualNodeGroup#os_sku}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#os_type OceanAksNpVirtualNodeGroup#os_type}.

---

##### `pod_subnet_ids`<sup>Optional</sup> <a name="pod_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.podSubnetIds"></a>

```python
pod_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#pod_subnet_ids OceanAksNpVirtualNodeGroup#pod_subnet_ids}.

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.scheduling"></a>

```python
scheduling: OceanAksNpVirtualNodeGroupScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#scheduling OceanAksNpVirtualNodeGroup#scheduling}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#spot_percentage OceanAksNpVirtualNodeGroup#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#tags OceanAksNpVirtualNodeGroup#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#taints OceanAksNpVirtualNodeGroup#taints}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.updatePolicy"></a>

```python
update_policy: OceanAksNpVirtualNodeGroupUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#update_policy OceanAksNpVirtualNodeGroup#update_policy}

---

##### `vnet_subnet_ids`<sup>Optional</sup> <a name="vnet_subnet_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupConfig.property.vnetSubnetIds"></a>

```python
vnet_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vnet_subnet_ids OceanAksNpVirtualNodeGroup#vnet_subnet_ids}.

---

### OceanAksNpVirtualNodeGroupFilters <a name="OceanAksNpVirtualNodeGroupFilters" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters(
  accelerated_networking: str = None,
  architectures: typing.List[str] = None,
  disk_performance: str = None,
  exclude_series: typing.List[str] = None,
  gpu_types: typing.List[str] = None,
  max_gpu: typing.Union[int, float] = None,
  max_memory_gib: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None,
  min_disk: typing.Union[int, float] = None,
  min_gpu: typing.Union[int, float] = None,
  min_memory_gib: typing.Union[int, float] = None,
  min_nics: typing.Union[int, float] = None,
  min_vcpu: typing.Union[int, float] = None,
  series: typing.List[str] = None,
  vm_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.acceleratedNetworking">accelerated_networking</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#accelerated_networking OceanAksNpVirtualNodeGroup#accelerated_networking}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#architectures OceanAksNpVirtualNodeGroup#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.diskPerformance">disk_performance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#disk_performance OceanAksNpVirtualNodeGroup#disk_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.excludeSeries">exclude_series</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#exclude_series OceanAksNpVirtualNodeGroup#exclude_series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.gpuTypes">gpu_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#gpu_types OceanAksNpVirtualNodeGroup#gpu_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.maxGpu">max_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_gpu OceanAksNpVirtualNodeGroup#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_memory_gib OceanAksNpVirtualNodeGroup#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_vcpu OceanAksNpVirtualNodeGroup#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minDisk">min_disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_disk OceanAksNpVirtualNodeGroup#min_disk}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minGpu">min_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_gpu OceanAksNpVirtualNodeGroup#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minMemoryGib">min_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_memory_gib OceanAksNpVirtualNodeGroup#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minNics">min_nics</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_nics OceanAksNpVirtualNodeGroup#min_nics}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minVcpu">min_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_vcpu OceanAksNpVirtualNodeGroup#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.series">series</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#series OceanAksNpVirtualNodeGroup#series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.vmTypes">vm_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vm_types OceanAksNpVirtualNodeGroup#vm_types}. |

---

##### `accelerated_networking`<sup>Optional</sup> <a name="accelerated_networking" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.acceleratedNetworking"></a>

```python
accelerated_networking: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#accelerated_networking OceanAksNpVirtualNodeGroup#accelerated_networking}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#architectures OceanAksNpVirtualNodeGroup#architectures}.

---

##### `disk_performance`<sup>Optional</sup> <a name="disk_performance" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.diskPerformance"></a>

```python
disk_performance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#disk_performance OceanAksNpVirtualNodeGroup#disk_performance}.

---

##### `exclude_series`<sup>Optional</sup> <a name="exclude_series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.excludeSeries"></a>

```python
exclude_series: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#exclude_series OceanAksNpVirtualNodeGroup#exclude_series}.

---

##### `gpu_types`<sup>Optional</sup> <a name="gpu_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.gpuTypes"></a>

```python
gpu_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#gpu_types OceanAksNpVirtualNodeGroup#gpu_types}.

---

##### `max_gpu`<sup>Optional</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.maxGpu"></a>

```python
max_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_gpu OceanAksNpVirtualNodeGroup#max_gpu}.

---

##### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_memory_gib OceanAksNpVirtualNodeGroup#max_memory_gib}.

---

##### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#max_vcpu OceanAksNpVirtualNodeGroup#max_vcpu}.

---

##### `min_disk`<sup>Optional</sup> <a name="min_disk" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minDisk"></a>

```python
min_disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_disk OceanAksNpVirtualNodeGroup#min_disk}.

---

##### `min_gpu`<sup>Optional</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minGpu"></a>

```python
min_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_gpu OceanAksNpVirtualNodeGroup#min_gpu}.

---

##### `min_memory_gib`<sup>Optional</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minMemoryGib"></a>

```python
min_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_memory_gib OceanAksNpVirtualNodeGroup#min_memory_gib}.

---

##### `min_nics`<sup>Optional</sup> <a name="min_nics" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minNics"></a>

```python
min_nics: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_nics OceanAksNpVirtualNodeGroup#min_nics}.

---

##### `min_vcpu`<sup>Optional</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.minVcpu"></a>

```python
min_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#min_vcpu OceanAksNpVirtualNodeGroup#min_vcpu}.

---

##### `series`<sup>Optional</sup> <a name="series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.series"></a>

```python
series: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#series OceanAksNpVirtualNodeGroup#series}.

---

##### `vm_types`<sup>Optional</sup> <a name="vm_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters.property.vmTypes"></a>

```python
vm_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vm_types OceanAksNpVirtualNodeGroup#vm_types}.

---

### OceanAksNpVirtualNodeGroupHeadrooms <a name="OceanAksNpVirtualNodeGroupHeadrooms" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms(
  cpu_per_unit: typing.Union[int, float] = None,
  gpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#cpu_per_unit OceanAksNpVirtualNodeGroup#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#gpu_per_unit OceanAksNpVirtualNodeGroup#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#memory_per_unit OceanAksNpVirtualNodeGroup#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#num_of_units OceanAksNpVirtualNodeGroup#num_of_units}. |

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#cpu_per_unit OceanAksNpVirtualNodeGroup#cpu_per_unit}.

---

##### `gpu_per_unit`<sup>Optional</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#gpu_per_unit OceanAksNpVirtualNodeGroup#gpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#memory_per_unit OceanAksNpVirtualNodeGroup#memory_per_unit}.

---

##### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#num_of_units OceanAksNpVirtualNodeGroup#num_of_units}.

---

### OceanAksNpVirtualNodeGroupLinuxOsConfig <a name="OceanAksNpVirtualNodeGroupLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig(
  sysctls: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig.property.sysctls">sysctls</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]</code> | sysctls block. |

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig.property.sysctls"></a>

```python
sysctls: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]

sysctls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#sysctls OceanAksNpVirtualNodeGroup#sysctls}

---

### OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls <a name="OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls(
  vm_max_map_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls.property.vmMaxMapCount">vm_max_map_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vm_max_map_count OceanAksNpVirtualNodeGroup#vm_max_map_count}. |

---

##### `vm_max_map_count`<sup>Optional</sup> <a name="vm_max_map_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls.property.vmMaxMapCount"></a>

```python
vm_max_map_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vm_max_map_count OceanAksNpVirtualNodeGroup#vm_max_map_count}.

---

### OceanAksNpVirtualNodeGroupScheduling <a name="OceanAksNpVirtualNodeGroupScheduling" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling(
  shutdown_hours: OceanAksNpVirtualNodeGroupSchedulingShutdownHours = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling.property.shutdownHours">shutdown_hours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a></code> | shutdown_hours block. |

---

##### `shutdown_hours`<sup>Optional</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling.property.shutdownHours"></a>

```python
shutdown_hours: OceanAksNpVirtualNodeGroupSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#shutdown_hours OceanAksNpVirtualNodeGroup#shutdown_hours}

---

### OceanAksNpVirtualNodeGroupSchedulingShutdownHours <a name="OceanAksNpVirtualNodeGroupSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours(
  is_enabled: typing.Union[bool, IResolvable] = None,
  time_windows: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#is_enabled OceanAksNpVirtualNodeGroup#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#time_windows OceanAksNpVirtualNodeGroup#time_windows}. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#is_enabled OceanAksNpVirtualNodeGroup#is_enabled}.

---

##### `time_windows`<sup>Optional</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#time_windows OceanAksNpVirtualNodeGroup#time_windows}.

---

### OceanAksNpVirtualNodeGroupTaints <a name="OceanAksNpVirtualNodeGroupTaints" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints(
  effect: str,
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#effect OceanAksNpVirtualNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#key OceanAksNpVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#value OceanAksNpVirtualNodeGroup#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#effect OceanAksNpVirtualNodeGroup#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#key OceanAksNpVirtualNodeGroup#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#value OceanAksNpVirtualNodeGroup#value}.

---

### OceanAksNpVirtualNodeGroupUpdatePolicy <a name="OceanAksNpVirtualNodeGroupUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy(
  should_roll: typing.Union[bool, IResolvable],
  conditioned_roll: typing.Union[bool, IResolvable] = None,
  roll_config: OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#should_roll OceanAksNpVirtualNodeGroup#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.property.conditionedRoll">conditioned_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#conditioned_roll OceanAksNpVirtualNodeGroup#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#should_roll OceanAksNpVirtualNodeGroup#should_roll}.

---

##### `conditioned_roll`<sup>Optional</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.property.conditionedRoll"></a>

```python
conditioned_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#conditioned_roll OceanAksNpVirtualNodeGroup#conditioned_roll}.

---

##### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy.property.rollConfig"></a>

```python
roll_config: OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#roll_config OceanAksNpVirtualNodeGroup#roll_config}

---

### OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig <a name="OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig(
  batch_min_healthy_percentage: typing.Union[int, float] = None,
  batch_size_percentage: typing.Union[int, float] = None,
  comment: str = None,
  node_names: typing.List[str] = None,
  node_pool_names: typing.List[str] = None,
  respect_pdb: typing.Union[bool, IResolvable] = None,
  respect_restrict_scale_down: typing.Union[bool, IResolvable] = None,
  vng_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batch_min_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#batch_min_healthy_percentage OceanAksNpVirtualNodeGroup#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#batch_size_percentage OceanAksNpVirtualNodeGroup#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#comment OceanAksNpVirtualNodeGroup#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.nodeNames">node_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#node_names OceanAksNpVirtualNodeGroup#node_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.nodePoolNames">node_pool_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#node_pool_names OceanAksNpVirtualNodeGroup#node_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.respectPdb">respect_pdb</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#respect_pdb OceanAksNpVirtualNodeGroup#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.respectRestrictScaleDown">respect_restrict_scale_down</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#respect_restrict_scale_down OceanAksNpVirtualNodeGroup#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.vngIds">vng_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vng_ids OceanAksNpVirtualNodeGroup#vng_ids}. |

---

##### `batch_min_healthy_percentage`<sup>Optional</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```python
batch_min_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#batch_min_healthy_percentage OceanAksNpVirtualNodeGroup#batch_min_healthy_percentage}.

---

##### `batch_size_percentage`<sup>Optional</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#batch_size_percentage OceanAksNpVirtualNodeGroup#batch_size_percentage}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#comment OceanAksNpVirtualNodeGroup#comment}.

---

##### `node_names`<sup>Optional</sup> <a name="node_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.nodeNames"></a>

```python
node_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#node_names OceanAksNpVirtualNodeGroup#node_names}.

---

##### `node_pool_names`<sup>Optional</sup> <a name="node_pool_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.nodePoolNames"></a>

```python
node_pool_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#node_pool_names OceanAksNpVirtualNodeGroup#node_pool_names}.

---

##### `respect_pdb`<sup>Optional</sup> <a name="respect_pdb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.respectPdb"></a>

```python
respect_pdb: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#respect_pdb OceanAksNpVirtualNodeGroup#respect_pdb}.

---

##### `respect_restrict_scale_down`<sup>Optional</sup> <a name="respect_restrict_scale_down" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.respectRestrictScaleDown"></a>

```python
respect_restrict_scale_down: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#respect_restrict_scale_down OceanAksNpVirtualNodeGroup#respect_restrict_scale_down}.

---

##### `vng_ids`<sup>Optional</sup> <a name="vng_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig.property.vngIds"></a>

```python
vng_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vng_ids OceanAksNpVirtualNodeGroup#vng_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpVirtualNodeGroupFiltersOutputReference <a name="OceanAksNpVirtualNodeGroupFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetAcceleratedNetworking">reset_accelerated_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetDiskPerformance">reset_disk_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetExcludeSeries">reset_exclude_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetGpuTypes">reset_gpu_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMaxGpu">reset_max_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMaxMemoryGib">reset_max_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMaxVcpu">reset_max_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinDisk">reset_min_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinGpu">reset_min_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinMemoryGib">reset_min_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinNics">reset_min_nics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinVcpu">reset_min_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetSeries">reset_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetVmTypes">reset_vm_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerated_networking` <a name="reset_accelerated_networking" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetAcceleratedNetworking"></a>

```python
def reset_accelerated_networking() -> None
```

##### `reset_architectures` <a name="reset_architectures" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_disk_performance` <a name="reset_disk_performance" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetDiskPerformance"></a>

```python
def reset_disk_performance() -> None
```

##### `reset_exclude_series` <a name="reset_exclude_series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetExcludeSeries"></a>

```python
def reset_exclude_series() -> None
```

##### `reset_gpu_types` <a name="reset_gpu_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetGpuTypes"></a>

```python
def reset_gpu_types() -> None
```

##### `reset_max_gpu` <a name="reset_max_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMaxGpu"></a>

```python
def reset_max_gpu() -> None
```

##### `reset_max_memory_gib` <a name="reset_max_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMaxMemoryGib"></a>

```python
def reset_max_memory_gib() -> None
```

##### `reset_max_vcpu` <a name="reset_max_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMaxVcpu"></a>

```python
def reset_max_vcpu() -> None
```

##### `reset_min_disk` <a name="reset_min_disk" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinDisk"></a>

```python
def reset_min_disk() -> None
```

##### `reset_min_gpu` <a name="reset_min_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinGpu"></a>

```python
def reset_min_gpu() -> None
```

##### `reset_min_memory_gib` <a name="reset_min_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinMemoryGib"></a>

```python
def reset_min_memory_gib() -> None
```

##### `reset_min_nics` <a name="reset_min_nics" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinNics"></a>

```python
def reset_min_nics() -> None
```

##### `reset_min_vcpu` <a name="reset_min_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetMinVcpu"></a>

```python
def reset_min_vcpu() -> None
```

##### `reset_series` <a name="reset_series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetSeries"></a>

```python
def reset_series() -> None
```

##### `reset_vm_types` <a name="reset_vm_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.resetVmTypes"></a>

```python
def reset_vm_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.acceleratedNetworkingInput">accelerated_networking_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.diskPerformanceInput">disk_performance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.excludeSeriesInput">exclude_series_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.gpuTypesInput">gpu_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxGpuInput">max_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxMemoryGibInput">max_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxVcpuInput">max_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minDiskInput">min_disk_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minGpuInput">min_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minMemoryGibInput">min_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minNicsInput">min_nics_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minVcpuInput">min_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.seriesInput">series_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.vmTypesInput">vm_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.acceleratedNetworking">accelerated_networking</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.diskPerformance">disk_performance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.excludeSeries">exclude_series</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.gpuTypes">gpu_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxGpu">max_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minDisk">min_disk</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minGpu">min_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minMemoryGib">min_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minNics">min_nics</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minVcpu">min_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.series">series</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.vmTypes">vm_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerated_networking_input`<sup>Optional</sup> <a name="accelerated_networking_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.acceleratedNetworkingInput"></a>

```python
accelerated_networking_input: str
```

- *Type:* str

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_performance_input`<sup>Optional</sup> <a name="disk_performance_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.diskPerformanceInput"></a>

```python
disk_performance_input: str
```

- *Type:* str

---

##### `exclude_series_input`<sup>Optional</sup> <a name="exclude_series_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.excludeSeriesInput"></a>

```python
exclude_series_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gpu_types_input`<sup>Optional</sup> <a name="gpu_types_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.gpuTypesInput"></a>

```python
gpu_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_gpu_input`<sup>Optional</sup> <a name="max_gpu_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxGpuInput"></a>

```python
max_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib_input`<sup>Optional</sup> <a name="max_memory_gib_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxMemoryGibInput"></a>

```python
max_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu_input`<sup>Optional</sup> <a name="max_vcpu_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxVcpuInput"></a>

```python
max_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_disk_input`<sup>Optional</sup> <a name="min_disk_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minDiskInput"></a>

```python
min_disk_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpu_input`<sup>Optional</sup> <a name="min_gpu_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minGpuInput"></a>

```python
min_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gib_input`<sup>Optional</sup> <a name="min_memory_gib_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minMemoryGibInput"></a>

```python
min_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nics_input`<sup>Optional</sup> <a name="min_nics_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minNicsInput"></a>

```python
min_nics_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vcpu_input`<sup>Optional</sup> <a name="min_vcpu_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minVcpuInput"></a>

```python
min_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `series_input`<sup>Optional</sup> <a name="series_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.seriesInput"></a>

```python
series_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_types_input`<sup>Optional</sup> <a name="vm_types_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.vmTypesInput"></a>

```python
vm_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerated_networking`<sup>Required</sup> <a name="accelerated_networking" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.acceleratedNetworking"></a>

```python
accelerated_networking: str
```

- *Type:* str

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_performance`<sup>Required</sup> <a name="disk_performance" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.diskPerformance"></a>

```python
disk_performance: str
```

- *Type:* str

---

##### `exclude_series`<sup>Required</sup> <a name="exclude_series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.excludeSeries"></a>

```python
exclude_series: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gpu_types`<sup>Required</sup> <a name="gpu_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.gpuTypes"></a>

```python
gpu_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_gpu`<sup>Required</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxGpu"></a>

```python
max_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib`<sup>Required</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu`<sup>Required</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_disk`<sup>Required</sup> <a name="min_disk" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minDisk"></a>

```python
min_disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpu`<sup>Required</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minGpu"></a>

```python
min_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gib`<sup>Required</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minMemoryGib"></a>

```python
min_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nics`<sup>Required</sup> <a name="min_nics" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minNics"></a>

```python
min_nics: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vcpu`<sup>Required</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.minVcpu"></a>

```python
min_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `series`<sup>Required</sup> <a name="series" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.series"></a>

```python
series: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vm_types`<sup>Required</sup> <a name="vm_types" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.vmTypes"></a>

```python
vm_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFiltersOutputReference.property.internalValue"></a>

```python
internal_value: OceanAksNpVirtualNodeGroupFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupFilters">OceanAksNpVirtualNodeGroupFilters</a>

---


### OceanAksNpVirtualNodeGroupHeadroomsList <a name="OceanAksNpVirtualNodeGroupHeadroomsList" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAksNpVirtualNodeGroupHeadroomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupHeadrooms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]]

---


### OceanAksNpVirtualNodeGroupHeadroomsOutputReference <a name="OceanAksNpVirtualNodeGroupHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetGpuPerUnit">reset_gpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetNumOfUnits">reset_num_of_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_gpu_per_unit` <a name="reset_gpu_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetGpuPerUnit"></a>

```python
def reset_gpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```

##### `reset_num_of_units` <a name="reset_num_of_units" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.resetNumOfUnits"></a>

```python
def reset_num_of_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnitInput">gpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit_input`<sup>Optional</sup> <a name="gpu_per_unit_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```python
gpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit`<sup>Required</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadroomsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAksNpVirtualNodeGroupHeadrooms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupHeadrooms">OceanAksNpVirtualNodeGroupHeadrooms</a>]

---


### OceanAksNpVirtualNodeGroupLinuxOsConfigList <a name="OceanAksNpVirtualNodeGroupLinuxOsConfigList" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]]

---


### OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference <a name="OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.putSysctls">put_sysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.resetSysctls">reset_sysctls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sysctls` <a name="put_sysctls" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.putSysctls"></a>

```python
def put_sysctls(
  value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.putSysctls.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]

---

##### `reset_sysctls` <a name="reset_sysctls" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.resetSysctls"></a>

```python
def reset_sysctls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.sysctls">sysctls</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.sysctlsInput">sysctls_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.sysctls"></a>

```python
sysctls: OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList</a>

---

##### `sysctls_input`<sup>Optional</sup> <a name="sysctls_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.sysctlsInput"></a>

```python
sysctls_input: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAksNpVirtualNodeGroupLinuxOsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfig">OceanAksNpVirtualNodeGroupLinuxOsConfig</a>]

---


### OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList <a name="OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]]

---


### OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference <a name="OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount">reset_vm_max_map_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vm_max_map_count` <a name="reset_vm_max_map_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount"></a>

```python
def reset_vm_max_map_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput">vm_max_map_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount">vm_max_map_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vm_max_map_count_input`<sup>Optional</sup> <a name="vm_max_map_count_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput"></a>

```python
vm_max_map_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_max_map_count`<sup>Required</sup> <a name="vm_max_map_count" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount"></a>

```python
vm_max_map_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctlsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls">OceanAksNpVirtualNodeGroupLinuxOsConfigSysctls</a>]

---


### OceanAksNpVirtualNodeGroupSchedulingOutputReference <a name="OceanAksNpVirtualNodeGroupSchedulingOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.putShutdownHours">put_shutdown_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.resetShutdownHours">reset_shutdown_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shutdown_hours` <a name="put_shutdown_hours" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.putShutdownHours"></a>

```python
def put_shutdown_hours(
  is_enabled: typing.Union[bool, IResolvable] = None,
  time_windows: typing.List[str] = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.putShutdownHours.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#is_enabled OceanAksNpVirtualNodeGroup#is_enabled}.

---

###### `time_windows`<sup>Optional</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.putShutdownHours.parameter.timeWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#time_windows OceanAksNpVirtualNodeGroup#time_windows}.

---

##### `reset_shutdown_hours` <a name="reset_shutdown_hours" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.resetShutdownHours"></a>

```python
def reset_shutdown_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.shutdownHours">shutdown_hours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference">OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.shutdownHoursInput">shutdown_hours_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shutdown_hours`<sup>Required</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.shutdownHours"></a>

```python
shutdown_hours: OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference">OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference</a>

---

##### `shutdown_hours_input`<sup>Optional</sup> <a name="shutdown_hours_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.shutdownHoursInput"></a>

```python
shutdown_hours_input: OceanAksNpVirtualNodeGroupSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: OceanAksNpVirtualNodeGroupScheduling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupScheduling">OceanAksNpVirtualNodeGroupScheduling</a>

---


### OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference <a name="OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resetTimeWindows">reset_time_windows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_time_windows` <a name="reset_time_windows" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.resetTimeWindows"></a>

```python
def reset_time_windows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.timeWindowsInput">time_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows_input`<sup>Optional</sup> <a name="time_windows_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```python
time_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```python
internal_value: OceanAksNpVirtualNodeGroupSchedulingShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupSchedulingShutdownHours">OceanAksNpVirtualNodeGroupSchedulingShutdownHours</a>

---


### OceanAksNpVirtualNodeGroupTaintsList <a name="OceanAksNpVirtualNodeGroupTaintsList" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAksNpVirtualNodeGroupTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAksNpVirtualNodeGroupTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]]

---


### OceanAksNpVirtualNodeGroupTaintsOutputReference <a name="OceanAksNpVirtualNodeGroupTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAksNpVirtualNodeGroupTaints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupTaints">OceanAksNpVirtualNodeGroupTaints</a>]

---


### OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference <a name="OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig">put_roll_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resetConditionedRoll">reset_conditioned_roll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resetRollConfig">reset_roll_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_roll_config` <a name="put_roll_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig"></a>

```python
def put_roll_config(
  batch_min_healthy_percentage: typing.Union[int, float] = None,
  batch_size_percentage: typing.Union[int, float] = None,
  comment: str = None,
  node_names: typing.List[str] = None,
  node_pool_names: typing.List[str] = None,
  respect_pdb: typing.Union[bool, IResolvable] = None,
  respect_restrict_scale_down: typing.Union[bool, IResolvable] = None,
  vng_ids: typing.List[str] = None
) -> None
```

###### `batch_min_healthy_percentage`<sup>Optional</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.batchMinHealthyPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#batch_min_healthy_percentage OceanAksNpVirtualNodeGroup#batch_min_healthy_percentage}.

---

###### `batch_size_percentage`<sup>Optional</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.batchSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#batch_size_percentage OceanAksNpVirtualNodeGroup#batch_size_percentage}.

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#comment OceanAksNpVirtualNodeGroup#comment}.

---

###### `node_names`<sup>Optional</sup> <a name="node_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.nodeNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#node_names OceanAksNpVirtualNodeGroup#node_names}.

---

###### `node_pool_names`<sup>Optional</sup> <a name="node_pool_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.nodePoolNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#node_pool_names OceanAksNpVirtualNodeGroup#node_pool_names}.

---

###### `respect_pdb`<sup>Optional</sup> <a name="respect_pdb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.respectPdb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#respect_pdb OceanAksNpVirtualNodeGroup#respect_pdb}.

---

###### `respect_restrict_scale_down`<sup>Optional</sup> <a name="respect_restrict_scale_down" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.respectRestrictScaleDown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#respect_restrict_scale_down OceanAksNpVirtualNodeGroup#respect_restrict_scale_down}.

---

###### `vng_ids`<sup>Optional</sup> <a name="vng_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.putRollConfig.parameter.vngIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.2/docs/resources/ocean_aks_np_virtual_node_group#vng_ids OceanAksNpVirtualNodeGroup#vng_ids}.

---

##### `reset_conditioned_roll` <a name="reset_conditioned_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resetConditionedRoll"></a>

```python
def reset_conditioned_roll() -> None
```

##### `reset_roll_config` <a name="reset_roll_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.resetRollConfig"></a>

```python
def reset_roll_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.conditionedRollInput">conditioned_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.rollConfigInput">roll_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.shouldRollInput">should_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.conditionedRoll">conditioned_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `roll_config`<sup>Required</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.rollConfig"></a>

```python
roll_config: OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference</a>

---

##### `conditioned_roll_input`<sup>Optional</sup> <a name="conditioned_roll_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```python
conditioned_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `roll_config_input`<sup>Optional</sup> <a name="roll_config_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.rollConfigInput"></a>

```python
roll_config_input: OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a>

---

##### `should_roll_input`<sup>Optional</sup> <a name="should_roll_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.shouldRollInput"></a>

```python
should_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conditioned_roll`<sup>Required</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.conditionedRoll"></a>

```python
conditioned_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: OceanAksNpVirtualNodeGroupUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicy">OceanAksNpVirtualNodeGroupUpdatePolicy</a>

---


### OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference <a name="OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aks_np_virtual_node_group

oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">reset_batch_min_healthy_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage">reset_batch_size_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetNodeNames">reset_node_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetNodePoolNames">reset_node_pool_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetRespectPdb">reset_respect_pdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown">reset_respect_restrict_scale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetVngIds">reset_vng_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_min_healthy_percentage` <a name="reset_batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```python
def reset_batch_min_healthy_percentage() -> None
```

##### `reset_batch_size_percentage` <a name="reset_batch_size_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage"></a>

```python
def reset_batch_size_percentage() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_node_names` <a name="reset_node_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetNodeNames"></a>

```python
def reset_node_names() -> None
```

##### `reset_node_pool_names` <a name="reset_node_pool_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetNodePoolNames"></a>

```python
def reset_node_pool_names() -> None
```

##### `reset_respect_pdb` <a name="reset_respect_pdb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```python
def reset_respect_pdb() -> None
```

##### `reset_respect_restrict_scale_down` <a name="reset_respect_restrict_scale_down" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown"></a>

```python
def reset_respect_restrict_scale_down() -> None
```

##### `reset_vng_ids` <a name="reset_vng_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.resetVngIds"></a>

```python
def reset_vng_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batch_min_healthy_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batch_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodeNamesInput">node_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput">node_pool_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respect_pdb_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput">respect_restrict_scale_down_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.vngIdsInput">vng_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batch_min_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodeNames">node_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodePoolNames">node_pool_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectPdb">respect_pdb</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown">respect_restrict_scale_down</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.vngIds">vng_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_min_healthy_percentage_input`<sup>Optional</sup> <a name="batch_min_healthy_percentage_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```python
batch_min_healthy_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage_input`<sup>Optional</sup> <a name="batch_size_percentage_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```python
batch_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `node_names_input`<sup>Optional</sup> <a name="node_names_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodeNamesInput"></a>

```python
node_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_pool_names_input`<sup>Optional</sup> <a name="node_pool_names_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput"></a>

```python
node_pool_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `respect_pdb_input`<sup>Optional</sup> <a name="respect_pdb_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```python
respect_pdb_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `respect_restrict_scale_down_input`<sup>Optional</sup> <a name="respect_restrict_scale_down_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput"></a>

```python
respect_restrict_scale_down_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vng_ids_input`<sup>Optional</sup> <a name="vng_ids_input" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.vngIdsInput"></a>

```python
vng_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `batch_min_healthy_percentage`<sup>Required</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```python
batch_min_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `node_names`<sup>Required</sup> <a name="node_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodeNames"></a>

```python
node_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_pool_names`<sup>Required</sup> <a name="node_pool_names" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.nodePoolNames"></a>

```python
node_pool_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `respect_pdb`<sup>Required</sup> <a name="respect_pdb" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```python
respect_pdb: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `respect_restrict_scale_down`<sup>Required</sup> <a name="respect_restrict_scale_down" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown"></a>

```python
respect_restrict_scale_down: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vng_ids`<sup>Required</sup> <a name="vng_ids" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.vngIds"></a>

```python
vng_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```python
internal_value: OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNpVirtualNodeGroup.OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig">OceanAksNpVirtualNodeGroupUpdatePolicyRollConfig</a>

---



