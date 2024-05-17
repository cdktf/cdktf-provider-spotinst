# `oceanGkeLaunchSpec` Submodule <a name="`oceanGkeLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanGkeLaunchSpec <a name="OceanGkeLaunchSpec" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec spotinst_ocean_gke_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpec(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ocean_id: str,
  autoscale_headrooms: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadrooms]] = None,
  autoscale_headrooms_automatic: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]] = None,
  id: str = None,
  instance_types: typing.List[str] = None,
  labels: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecLabels]] = None,
  metadata: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecMetadata]] = None,
  name: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfaces]] = None,
  node_pool_name: str = None,
  resource_limits: OceanGkeLaunchSpecResourceLimits = None,
  restrict_scale_down: typing.Union[bool, IResolvable] = None,
  root_volume_size: typing.Union[int, float] = None,
  root_volume_type: str = None,
  scheduling_task: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTask]] = None,
  service_account: str = None,
  shielded_instance_config: OceanGkeLaunchSpecShieldedInstanceConfig = None,
  source_image: str = None,
  storage: OceanGkeLaunchSpecStorage = None,
  strategy: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecStrategy]] = None,
  tags: typing.List[str] = None,
  taints: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecTaints]] = None,
  update_policy: OceanGkeLaunchSpecUpdatePolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.oceanId">ocean_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadrooms">autoscale_headrooms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]</code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadroomsAutomatic">autoscale_headrooms_automatic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]</code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.nodePoolName">node_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.restrictScaleDown">restrict_scale_down</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeSize">root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeType">root_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.schedulingTask">scheduling_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.sourceImage">source_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.strategy">strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | update_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.oceanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}.

---

##### `autoscale_headrooms`<sup>Optional</sup> <a name="autoscale_headrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadrooms"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#autoscale_headrooms OceanGkeLaunchSpec#autoscale_headrooms}

---

##### `autoscale_headrooms_automatic`<sup>Optional</sup> <a name="autoscale_headrooms_automatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.autoscaleHeadroomsAutomatic"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#autoscale_headrooms_automatic OceanGkeLaunchSpec#autoscale_headrooms_automatic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.instanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#labels OceanGkeLaunchSpec#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.metadata"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#metadata OceanGkeLaunchSpec#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.networkInterfaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#network_interfaces OceanGkeLaunchSpec#network_interfaces}

---

##### `node_pool_name`<sup>Optional</sup> <a name="node_pool_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.nodePoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}.

---

##### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.resourceLimits"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#resource_limits OceanGkeLaunchSpec#resource_limits}

---

##### `restrict_scale_down`<sup>Optional</sup> <a name="restrict_scale_down" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.restrictScaleDown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}.

---

##### `root_volume_size`<sup>Optional</sup> <a name="root_volume_size" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}.

---

##### `root_volume_type`<sup>Optional</sup> <a name="root_volume_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.rootVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}.

---

##### `scheduling_task`<sup>Optional</sup> <a name="scheduling_task" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.schedulingTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#scheduling_task OceanGkeLaunchSpec#scheduling_task}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}.

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#shielded_instance_config OceanGkeLaunchSpec#shielded_instance_config}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.sourceImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#storage OceanGkeLaunchSpec#storage}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.strategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#strategy OceanGkeLaunchSpec#strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#taints OceanGkeLaunchSpec#taints}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#update_policy OceanGkeLaunchSpec#update_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms">put_autoscale_headrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic">put_autoscale_headrooms_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits">put_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask">put_scheduling_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy">put_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadrooms">reset_autoscale_headrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadroomsAutomatic">reset_autoscale_headrooms_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetInstanceTypes">reset_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNodePoolName">reset_node_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetResourceLimits">reset_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRestrictScaleDown">reset_restrict_scale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeSize">reset_root_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeType">reset_root_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSchedulingTask">reset_scheduling_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSourceImage">reset_source_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStrategy">reset_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTaints">reset_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscale_headrooms` <a name="put_autoscale_headrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms"></a>

```python
def put_autoscale_headrooms(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadrooms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]

---

##### `put_autoscale_headrooms_automatic` <a name="put_autoscale_headrooms_automatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic"></a>

```python
def put_autoscale_headrooms_automatic(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putAutoscaleHeadroomsAutomatic.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata"></a>

```python
def put_metadata(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecMetadata]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putMetadata.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]

---

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putNetworkInterfaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]

---

##### `put_resource_limits` <a name="put_resource_limits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits"></a>

```python
def put_resource_limits(
  max_instance_count: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None
) -> None
```

###### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits.parameter.maxInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}.

---

###### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putResourceLimits.parameter.minInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}.

---

##### `put_scheduling_task` <a name="put_scheduling_task" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask"></a>

```python
def put_scheduling_task(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}.

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}.

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage"></a>

```python
def put_storage(
  local_ssd_count: typing.Union[int, float] = None
) -> None
```

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStorage.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}.

---

##### `put_strategy` <a name="put_strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy"></a>

```python
def put_strategy(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecTaints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy"></a>

```python
def put_update_policy(
  should_roll: typing.Union[bool, IResolvable],
  roll_config: OceanGkeLaunchSpecUpdatePolicyRollConfig = None
) -> None
```

###### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy.parameter.shouldRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}.

---

###### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.putUpdatePolicy.parameter.rollConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#roll_config OceanGkeLaunchSpec#roll_config}

---

##### `reset_autoscale_headrooms` <a name="reset_autoscale_headrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadrooms"></a>

```python
def reset_autoscale_headrooms() -> None
```

##### `reset_autoscale_headrooms_automatic` <a name="reset_autoscale_headrooms_automatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetAutoscaleHeadroomsAutomatic"></a>

```python
def reset_autoscale_headrooms_automatic() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_types` <a name="reset_instance_types" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetInstanceTypes"></a>

```python
def reset_instance_types() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```

##### `reset_node_pool_name` <a name="reset_node_pool_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetNodePoolName"></a>

```python
def reset_node_pool_name() -> None
```

##### `reset_resource_limits` <a name="reset_resource_limits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetResourceLimits"></a>

```python
def reset_resource_limits() -> None
```

##### `reset_restrict_scale_down` <a name="reset_restrict_scale_down" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRestrictScaleDown"></a>

```python
def reset_restrict_scale_down() -> None
```

##### `reset_root_volume_size` <a name="reset_root_volume_size" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeSize"></a>

```python
def reset_root_volume_size() -> None
```

##### `reset_root_volume_type` <a name="reset_root_volume_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetRootVolumeType"></a>

```python
def reset_root_volume_type() -> None
```

##### `reset_scheduling_task` <a name="reset_scheduling_task" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSchedulingTask"></a>

```python
def reset_scheduling_task() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_source_image` <a name="reset_source_image" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetSourceImage"></a>

```python
def reset_source_image() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetStrategy"></a>

```python
def reset_strategy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetTaints"></a>

```python
def reset_taints() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceanGkeLaunchSpec resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpec.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpec.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpec.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpec.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceanGkeLaunchSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceanGkeLaunchSpec to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceanGkeLaunchSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanGkeLaunchSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadrooms">autoscale_headrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList">OceanGkeLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomatic">autoscale_headrooms_automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList">OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList">OceanGkeLaunchSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList">OceanGkeLaunchSpecMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList">OceanGkeLaunchSpecNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference">OceanGkeLaunchSpecResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTask">scheduling_task</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList">OceanGkeLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference">OceanGkeLaunchSpecShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference">OceanGkeLaunchSpecStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList">OceanGkeLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList">OceanGkeLaunchSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference">OceanGkeLaunchSpecUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomaticInput">autoscale_headrooms_automatic_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsInput">autoscale_headrooms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypesInput">instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadataInput">metadata_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolNameInput">node_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanIdInput">ocean_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimitsInput">resource_limits_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDownInput">restrict_scale_down_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSizeInput">root_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeTypeInput">root_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTaskInput">scheduling_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storageInput">storage_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategyInput">strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicyInput">update_policy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolName">node_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanId">ocean_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDown">restrict_scale_down</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSize">root_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeType">root_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscale_headrooms`<sup>Required</sup> <a name="autoscale_headrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadrooms"></a>

```python
autoscale_headrooms: OceanGkeLaunchSpecAutoscaleHeadroomsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList">OceanGkeLaunchSpecAutoscaleHeadroomsList</a>

---

##### `autoscale_headrooms_automatic`<sup>Required</sup> <a name="autoscale_headrooms_automatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomatic"></a>

```python
autoscale_headrooms_automatic: OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList">OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labels"></a>

```python
labels: OceanGkeLaunchSpecLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList">OceanGkeLaunchSpecLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadata"></a>

```python
metadata: OceanGkeLaunchSpecMetadataList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList">OceanGkeLaunchSpecMetadataList</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfaces"></a>

```python
network_interfaces: OceanGkeLaunchSpecNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList">OceanGkeLaunchSpecNetworkInterfacesList</a>

---

##### `resource_limits`<sup>Required</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimits"></a>

```python
resource_limits: OceanGkeLaunchSpecResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference">OceanGkeLaunchSpecResourceLimitsOutputReference</a>

---

##### `scheduling_task`<sup>Required</sup> <a name="scheduling_task" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTask"></a>

```python
scheduling_task: OceanGkeLaunchSpecSchedulingTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList">OceanGkeLaunchSpecSchedulingTaskList</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: OceanGkeLaunchSpecShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference">OceanGkeLaunchSpecShieldedInstanceConfigOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storage"></a>

```python
storage: OceanGkeLaunchSpecStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference">OceanGkeLaunchSpecStorageOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategy"></a>

```python
strategy: OceanGkeLaunchSpecStrategyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList">OceanGkeLaunchSpecStrategyList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taints"></a>

```python
taints: OceanGkeLaunchSpecTaintsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList">OceanGkeLaunchSpecTaintsList</a>

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicy"></a>

```python
update_policy: OceanGkeLaunchSpecUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference">OceanGkeLaunchSpecUpdatePolicyOutputReference</a>

---

##### `autoscale_headrooms_automatic_input`<sup>Optional</sup> <a name="autoscale_headrooms_automatic_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsAutomaticInput"></a>

```python
autoscale_headrooms_automatic_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]

---

##### `autoscale_headrooms_input`<sup>Optional</sup> <a name="autoscale_headrooms_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.autoscaleHeadroomsInput"></a>

```python
autoscale_headrooms_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadrooms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_types_input`<sup>Optional</sup> <a name="instance_types_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypesInput"></a>

```python
instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.metadataInput"></a>

```python
metadata_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.networkInterfacesInput"></a>

```python
network_interfaces_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]

---

##### `node_pool_name_input`<sup>Optional</sup> <a name="node_pool_name_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolNameInput"></a>

```python
node_pool_name_input: str
```

- *Type:* str

---

##### `ocean_id_input`<sup>Optional</sup> <a name="ocean_id_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanIdInput"></a>

```python
ocean_id_input: str
```

- *Type:* str

---

##### `resource_limits_input`<sup>Optional</sup> <a name="resource_limits_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.resourceLimitsInput"></a>

```python
resource_limits_input: OceanGkeLaunchSpecResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---

##### `restrict_scale_down_input`<sup>Optional</sup> <a name="restrict_scale_down_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDownInput"></a>

```python
restrict_scale_down_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_volume_size_input`<sup>Optional</sup> <a name="root_volume_size_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSizeInput"></a>

```python
root_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_volume_type_input`<sup>Optional</sup> <a name="root_volume_type_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeTypeInput"></a>

```python
root_volume_type_input: str
```

- *Type:* str

---

##### `scheduling_task_input`<sup>Optional</sup> <a name="scheduling_task_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.schedulingTaskInput"></a>

```python
scheduling_task_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: OceanGkeLaunchSpecShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.storageInput"></a>

```python
storage_input: OceanGkeLaunchSpecStorage
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.strategyInput"></a>

```python
strategy_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.updatePolicyInput"></a>

```python
update_policy_input: OceanGkeLaunchSpecUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_pool_name`<sup>Required</sup> <a name="node_pool_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.nodePoolName"></a>

```python
node_pool_name: str
```

- *Type:* str

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.oceanId"></a>

```python
ocean_id: str
```

- *Type:* str

---

##### `restrict_scale_down`<sup>Required</sup> <a name="restrict_scale_down" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.restrictScaleDown"></a>

```python
restrict_scale_down: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_volume_size`<sup>Required</sup> <a name="root_volume_size" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeSize"></a>

```python
root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_volume_type`<sup>Required</sup> <a name="root_volume_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.rootVolumeType"></a>

```python
root_volume_type: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpec.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanGkeLaunchSpecAutoscaleHeadrooms <a name="OceanGkeLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms(
  num_of_units: typing.Union[int, float],
  cpu_per_unit: typing.Union[int, float] = None,
  gpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}. |

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}.

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}.

---

##### `gpu_per_unit`<sup>Optional</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}.

---

### OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic(
  auto_headroom_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage">auto_headroom_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#auto_headroom_percentage OceanGkeLaunchSpec#auto_headroom_percentage}. |

---

##### `auto_headroom_percentage`<sup>Optional</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage"></a>

```python
auto_headroom_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#auto_headroom_percentage OceanGkeLaunchSpec#auto_headroom_percentage}.

---

### OceanGkeLaunchSpecConfig <a name="OceanGkeLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ocean_id: str,
  autoscale_headrooms: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadrooms]] = None,
  autoscale_headrooms_automatic: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]] = None,
  id: str = None,
  instance_types: typing.List[str] = None,
  labels: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecLabels]] = None,
  metadata: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecMetadata]] = None,
  name: str = None,
  network_interfaces: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfaces]] = None,
  node_pool_name: str = None,
  resource_limits: OceanGkeLaunchSpecResourceLimits = None,
  restrict_scale_down: typing.Union[bool, IResolvable] = None,
  root_volume_size: typing.Union[int, float] = None,
  root_volume_type: str = None,
  scheduling_task: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTask]] = None,
  service_account: str = None,
  shielded_instance_config: OceanGkeLaunchSpecShieldedInstanceConfig = None,
  source_image: str = None,
  storage: OceanGkeLaunchSpecStorage = None,
  strategy: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecStrategy]] = None,
  tags: typing.List[str] = None,
  taints: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecTaints]] = None,
  update_policy: OceanGkeLaunchSpecUpdatePolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.oceanId">ocean_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadrooms">autoscale_headrooms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]</code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadroomsAutomatic">autoscale_headrooms_automatic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]</code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.networkInterfaces">network_interfaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.nodePoolName">node_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.restrictScaleDown">restrict_scale_down</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeSize">root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeType">root_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.schedulingTask">scheduling_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.sourceImage">source_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.strategy">strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | update_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.oceanId"></a>

```python
ocean_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#ocean_id OceanGkeLaunchSpec#ocean_id}.

---

##### `autoscale_headrooms`<sup>Optional</sup> <a name="autoscale_headrooms" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```python
autoscale_headrooms: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadrooms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#autoscale_headrooms OceanGkeLaunchSpec#autoscale_headrooms}

---

##### `autoscale_headrooms_automatic`<sup>Optional</sup> <a name="autoscale_headrooms_automatic" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.autoscaleHeadroomsAutomatic"></a>

```python
autoscale_headrooms_automatic: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#autoscale_headrooms_automatic OceanGkeLaunchSpec#autoscale_headrooms_automatic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#id OceanGkeLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#instance_types OceanGkeLaunchSpec#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#labels OceanGkeLaunchSpec#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.metadata"></a>

```python
metadata: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#metadata OceanGkeLaunchSpec#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.networkInterfaces"></a>

```python
network_interfaces: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#network_interfaces OceanGkeLaunchSpec#network_interfaces}

---

##### `node_pool_name`<sup>Optional</sup> <a name="node_pool_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.nodePoolName"></a>

```python
node_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#node_pool_name OceanGkeLaunchSpec#node_pool_name}.

---

##### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.resourceLimits"></a>

```python
resource_limits: OceanGkeLaunchSpecResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#resource_limits OceanGkeLaunchSpec#resource_limits}

---

##### `restrict_scale_down`<sup>Optional</sup> <a name="restrict_scale_down" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.restrictScaleDown"></a>

```python
restrict_scale_down: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#restrict_scale_down OceanGkeLaunchSpec#restrict_scale_down}.

---

##### `root_volume_size`<sup>Optional</sup> <a name="root_volume_size" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeSize"></a>

```python
root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_size OceanGkeLaunchSpec#root_volume_size}.

---

##### `root_volume_type`<sup>Optional</sup> <a name="root_volume_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.rootVolumeType"></a>

```python
root_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#root_volume_type OceanGkeLaunchSpec#root_volume_type}.

---

##### `scheduling_task`<sup>Optional</sup> <a name="scheduling_task" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.schedulingTask"></a>

```python
scheduling_task: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#scheduling_task OceanGkeLaunchSpec#scheduling_task}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#service_account OceanGkeLaunchSpec#service_account}.

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: OceanGkeLaunchSpecShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#shielded_instance_config OceanGkeLaunchSpec#shielded_instance_config}

---

##### `source_image`<sup>Optional</sup> <a name="source_image" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#source_image OceanGkeLaunchSpec#source_image}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.storage"></a>

```python
storage: OceanGkeLaunchSpecStorage
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#storage OceanGkeLaunchSpec#storage}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.strategy"></a>

```python
strategy: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#strategy OceanGkeLaunchSpec#strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#tags OceanGkeLaunchSpec#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#taints OceanGkeLaunchSpec#taints}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecConfig.property.updatePolicy"></a>

```python
update_policy: OceanGkeLaunchSpecUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#update_policy OceanGkeLaunchSpec#update_policy}

---

### OceanGkeLaunchSpecLabels <a name="OceanGkeLaunchSpecLabels" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecMetadata <a name="OceanGkeLaunchSpecMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecNetworkInterfaces <a name="OceanGkeLaunchSpecNetworkInterfaces" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces(
  network: str,
  access_configs: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAccessConfigs]] = None,
  alias_ip_ranges: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges]] = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.network">network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#network OceanGkeLaunchSpec#network}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.accessConfigs">access_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.aliasIpRanges">alias_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]</code> | alias_ip_ranges block. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#project_id OceanGkeLaunchSpec#project_id}. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.network"></a>

```python
network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#network OceanGkeLaunchSpec#network}.

---

##### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.accessConfigs"></a>

```python
access_configs: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#access_configs OceanGkeLaunchSpec#access_configs}

---

##### `alias_ip_ranges`<sup>Optional</sup> <a name="alias_ip_ranges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.aliasIpRanges"></a>

```python
alias_ip_ranges: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#alias_ip_ranges OceanGkeLaunchSpec#alias_ip_ranges}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#project_id OceanGkeLaunchSpec#project_id}.

---

### OceanGkeLaunchSpecNetworkInterfacesAccessConfigs <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#type OceanGkeLaunchSpec#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#name OceanGkeLaunchSpec#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#type OceanGkeLaunchSpec#type}.

---

### OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges(
  ip_cidr_range: str,
  subnetwork_range_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#ip_cidr_range OceanGkeLaunchSpec#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#subnetwork_range_name OceanGkeLaunchSpec#subnetwork_range_name}. |

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#ip_cidr_range OceanGkeLaunchSpec#ip_cidr_range}.

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#subnetwork_range_name OceanGkeLaunchSpec#subnetwork_range_name}.

---

### OceanGkeLaunchSpecResourceLimits <a name="OceanGkeLaunchSpecResourceLimits" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits(
  max_instance_count: typing.Union[int, float] = None,
  min_instance_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}. |

---

##### `max_instance_count`<sup>Optional</sup> <a name="max_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#max_instance_count OceanGkeLaunchSpec#max_instance_count}.

---

##### `min_instance_count`<sup>Optional</sup> <a name="min_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#min_instance_count OceanGkeLaunchSpec#min_instance_count}.

---

### OceanGkeLaunchSpecSchedulingTask <a name="OceanGkeLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask(
  cron_expression: str,
  is_enabled: typing.Union[bool, IResolvable],
  task_type: str,
  task_headroom: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTaskTaskHeadroom]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#cron_expression OceanGkeLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#is_enabled OceanGkeLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#task_type OceanGkeLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskHeadroom">task_headroom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]</code> | task_headroom block. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#cron_expression OceanGkeLaunchSpec#cron_expression}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#is_enabled OceanGkeLaunchSpec#is_enabled}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#task_type OceanGkeLaunchSpec#task_type}.

---

##### `task_headroom`<sup>Optional</sup> <a name="task_headroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```python
task_headroom: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTaskTaskHeadroom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]

task_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#task_headroom OceanGkeLaunchSpec#task_headroom}

---

### OceanGkeLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom(
  num_of_units: typing.Union[int, float],
  cpu_per_unit: typing.Union[int, float] = None,
  gpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}. |

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#num_of_units OceanGkeLaunchSpec#num_of_units}.

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#cpu_per_unit OceanGkeLaunchSpec#cpu_per_unit}.

---

##### `gpu_per_unit`<sup>Optional</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#gpu_per_unit OceanGkeLaunchSpec#gpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#memory_per_unit OceanGkeLaunchSpec#memory_per_unit}.

---

### OceanGkeLaunchSpecShieldedInstanceConfig <a name="OceanGkeLaunchSpecShieldedInstanceConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#enable_integrity_monitoring OceanGkeLaunchSpec#enable_integrity_monitoring}.

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#enable_secure_boot OceanGkeLaunchSpec#enable_secure_boot}.

---

### OceanGkeLaunchSpecStorage <a name="OceanGkeLaunchSpecStorage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage(
  local_ssd_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}. |

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#local_ssd_count OceanGkeLaunchSpec#local_ssd_count}.

---

### OceanGkeLaunchSpecStrategy <a name="OceanGkeLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy(
  preemptible_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.property.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#preemptible_percentage OceanGkeLaunchSpec#preemptible_percentage}. |

---

##### `preemptible_percentage`<sup>Optional</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy.property.preemptiblePercentage"></a>

```python
preemptible_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#preemptible_percentage OceanGkeLaunchSpec#preemptible_percentage}.

---

### OceanGkeLaunchSpecTaints <a name="OceanGkeLaunchSpecTaints" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints(
  effect: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#effect OceanGkeLaunchSpec#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#effect OceanGkeLaunchSpec#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#key OceanGkeLaunchSpec#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#value OceanGkeLaunchSpec#value}.

---

### OceanGkeLaunchSpecUpdatePolicy <a name="OceanGkeLaunchSpecUpdatePolicy" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy(
  should_roll: typing.Union[bool, IResolvable],
  roll_config: OceanGkeLaunchSpecUpdatePolicyRollConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#should_roll OceanGkeLaunchSpec#should_roll}.

---

##### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy.property.rollConfig"></a>

```python
roll_config: OceanGkeLaunchSpecUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#roll_config OceanGkeLaunchSpec#roll_config}

---

### OceanGkeLaunchSpecUpdatePolicyRollConfig <a name="OceanGkeLaunchSpecUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig(
  batch_size_percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}. |

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]]

---


### OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference <a name="OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage">reset_auto_headroom_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_headroom_percentage` <a name="reset_auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage"></a>

```python
def reset_auto_headroom_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput">auto_headroom_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage">auto_headroom_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_headroom_percentage_input`<sup>Optional</sup> <a name="auto_headroom_percentage_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput"></a>

```python
auto_headroom_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_headroom_percentage`<sup>Required</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage"></a>

```python
auto_headroom_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic">OceanGkeLaunchSpecAutoscaleHeadroomsAutomatic</a>]

---


### OceanGkeLaunchSpecAutoscaleHeadroomsList <a name="OceanGkeLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecAutoscaleHeadrooms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]]

---


### OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit">reset_gpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_gpu_per_unit` <a name="reset_gpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit"></a>

```python
def reset_gpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput">gpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit_input`<sup>Optional</sup> <a name="gpu_per_unit_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```python
gpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit`<sup>Required</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecAutoscaleHeadrooms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecAutoscaleHeadrooms">OceanGkeLaunchSpecAutoscaleHeadrooms</a>]

---


### OceanGkeLaunchSpecLabelsList <a name="OceanGkeLaunchSpecLabelsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]]

---


### OceanGkeLaunchSpecLabelsOutputReference <a name="OceanGkeLaunchSpecLabelsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecLabels">OceanGkeLaunchSpecLabels</a>]

---


### OceanGkeLaunchSpecMetadataList <a name="OceanGkeLaunchSpecMetadataList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]]

---


### OceanGkeLaunchSpecMetadataOutputReference <a name="OceanGkeLaunchSpecMetadataOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecMetadata]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecMetadata">OceanGkeLaunchSpecMetadata</a>]

---


### OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]

---


### OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecNetworkInterfacesAccessConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]

---


### OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]

---


### OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetwork_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `subnetwork_range_name_input`<sup>Optional</sup> <a name="subnetwork_range_name_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```python
subnetwork_range_name_input: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]

---


### OceanGkeLaunchSpecNetworkInterfacesList <a name="OceanGkeLaunchSpecNetworkInterfacesList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]]

---


### OceanGkeLaunchSpecNetworkInterfacesOutputReference <a name="OceanGkeLaunchSpecNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs">put_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges">put_alias_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAccessConfigs">reset_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAliasIpRanges">reset_alias_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_configs` <a name="put_access_configs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs"></a>

```python
def put_access_configs(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAccessConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]

---

##### `put_alias_ip_ranges` <a name="put_alias_ip_ranges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges"></a>

```python
def put_alias_ip_ranges(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]

---

##### `reset_access_configs` <a name="reset_access_configs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```python
def reset_access_configs() -> None
```

##### `reset_alias_ip_ranges` <a name="reset_alias_ip_ranges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetAliasIpRanges"></a>

```python
def reset_alias_ip_ranges() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigs">access_configs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList">OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRanges">alias_ip_ranges</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList">OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigsInput">access_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRangesInput">alias_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_configs`<sup>Required</sup> <a name="access_configs" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigs"></a>

```python
access_configs: OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList">OceanGkeLaunchSpecNetworkInterfacesAccessConfigsList</a>

---

##### `alias_ip_ranges`<sup>Required</sup> <a name="alias_ip_ranges" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRanges"></a>

```python
alias_ip_ranges: OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList">OceanGkeLaunchSpecNetworkInterfacesAliasIpRangesList</a>

---

##### `access_configs_input`<sup>Optional</sup> <a name="access_configs_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```python
access_configs_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAccessConfigs">OceanGkeLaunchSpecNetworkInterfacesAccessConfigs</a>]]

---

##### `alias_ip_ranges_input`<sup>Optional</sup> <a name="alias_ip_ranges_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.aliasIpRangesInput"></a>

```python
alias_ip_ranges_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges">OceanGkeLaunchSpecNetworkInterfacesAliasIpRanges</a>]]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecNetworkInterfaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecNetworkInterfaces">OceanGkeLaunchSpecNetworkInterfaces</a>]

---


### OceanGkeLaunchSpecResourceLimitsOutputReference <a name="OceanGkeLaunchSpecResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount">reset_max_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount">reset_min_instance_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_instance_count` <a name="reset_max_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```python
def reset_max_instance_count() -> None
```

##### `reset_min_instance_count` <a name="reset_min_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount"></a>

```python
def reset_min_instance_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput">max_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput">min_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount">max_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCount">min_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instance_count_input`<sup>Optional</sup> <a name="max_instance_count_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```python
max_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count_input`<sup>Optional</sup> <a name="min_instance_count_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput"></a>

```python
min_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instance_count`<sup>Required</sup> <a name="max_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount"></a>

```python
max_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_count`<sup>Required</sup> <a name="min_instance_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.minInstanceCount"></a>

```python
min_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimitsOutputReference.property.internalValue"></a>

```python
internal_value: OceanGkeLaunchSpecResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecResourceLimits">OceanGkeLaunchSpecResourceLimits</a>

---


### OceanGkeLaunchSpecSchedulingTaskList <a name="OceanGkeLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]]

---


### OceanGkeLaunchSpecSchedulingTaskOutputReference <a name="OceanGkeLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">put_task_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">reset_task_headroom</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_task_headroom` <a name="put_task_headroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```python
def put_task_headroom(
  value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTaskTaskHeadroom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]

---

##### `reset_task_headroom` <a name="reset_task_headroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```python
def reset_task_headroom() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">task_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList">OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">task_headroom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `task_headroom`<sup>Required</sup> <a name="task_headroom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```python
task_headroom: OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList">OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_headroom_input`<sup>Optional</sup> <a name="task_headroom_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```python
task_headroom_input: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTaskTaskHeadroom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecSchedulingTask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTask">OceanGkeLaunchSpecSchedulingTask</a>]

---


### OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecSchedulingTaskTaskHeadroom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]]

---


### OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit">reset_gpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_gpu_per_unit` <a name="reset_gpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit"></a>

```python
def reset_gpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput">gpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit_input`<sup>Optional</sup> <a name="gpu_per_unit_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput"></a>

```python
gpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit`<sup>Required</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecSchedulingTaskTaskHeadroom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecSchedulingTaskTaskHeadroom">OceanGkeLaunchSpecSchedulingTaskTaskHeadroom</a>]

---


### OceanGkeLaunchSpecShieldedInstanceConfigOutputReference <a name="OceanGkeLaunchSpecShieldedInstanceConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: OceanGkeLaunchSpecShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecShieldedInstanceConfig">OceanGkeLaunchSpecShieldedInstanceConfig</a>

---


### OceanGkeLaunchSpecStorageOutputReference <a name="OceanGkeLaunchSpecStorageOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorageOutputReference.property.internalValue"></a>

```python
internal_value: OceanGkeLaunchSpecStorage
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStorage">OceanGkeLaunchSpecStorage</a>

---


### OceanGkeLaunchSpecStrategyList <a name="OceanGkeLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]]

---


### OceanGkeLaunchSpecStrategyOutputReference <a name="OceanGkeLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resetPreemptiblePercentage">reset_preemptible_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preemptible_percentage` <a name="reset_preemptible_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.resetPreemptiblePercentage"></a>

```python
def reset_preemptible_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentageInput">preemptible_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preemptible_percentage_input`<sup>Optional</sup> <a name="preemptible_percentage_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentageInput"></a>

```python
preemptible_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preemptible_percentage`<sup>Required</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.preemptiblePercentage"></a>

```python
preemptible_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecStrategy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecStrategy">OceanGkeLaunchSpecStrategy</a>]

---


### OceanGkeLaunchSpecTaintsList <a name="OceanGkeLaunchSpecTaintsList" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanGkeLaunchSpecTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanGkeLaunchSpecTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]]

---


### OceanGkeLaunchSpecTaintsOutputReference <a name="OceanGkeLaunchSpecTaintsOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanGkeLaunchSpecTaints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecTaints">OceanGkeLaunchSpecTaints</a>]

---


### OceanGkeLaunchSpecUpdatePolicyOutputReference <a name="OceanGkeLaunchSpecUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig">put_roll_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resetRollConfig">reset_roll_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_roll_config` <a name="put_roll_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig"></a>

```python
def put_roll_config(
  batch_size_percentage: typing.Union[int, float]
) -> None
```

###### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.putRollConfig.parameter.batchSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.172.2/docs/resources/ocean_gke_launch_spec#batch_size_percentage OceanGkeLaunchSpec#batch_size_percentage}.

---

##### `reset_roll_config` <a name="reset_roll_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.resetRollConfig"></a>

```python
def reset_roll_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference">OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput">roll_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput">should_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `roll_config`<sup>Required</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfig"></a>

```python
roll_config: OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference">OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference</a>

---

##### `roll_config_input`<sup>Optional</sup> <a name="roll_config_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput"></a>

```python
roll_config_input: OceanGkeLaunchSpecUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---

##### `should_roll_input`<sup>Optional</sup> <a name="should_roll_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput"></a>

```python
should_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: OceanGkeLaunchSpecUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicy">OceanGkeLaunchSpecUpdatePolicy</a>

---


### OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference <a name="OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_gke_launch_spec

oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batch_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_percentage_input`<sup>Optional</sup> <a name="batch_size_percentage_input" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```python
batch_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```python
internal_value: OceanGkeLaunchSpecUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpec.OceanGkeLaunchSpecUpdatePolicyRollConfig">OceanGkeLaunchSpecUpdatePolicyRollConfig</a>

---



