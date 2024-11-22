# `elastigroupGcp` Submodule <a name="`elastigroupGcp` Submodule" id="@cdktf/provider-spotinst.elastigroupGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupGcp <a name="ElastigroupGcp" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp spotinst_elastigroup_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desired_capacity: typing.Union[int, float],
  name: str,
  auto_healing: typing.Union[bool, IResolvable] = None,
  availability_zones: typing.List[str] = None,
  backend_services: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServices]] = None,
  description: str = None,
  disk: typing.Union[IResolvable, typing.List[ElastigroupGcpDisk]] = None,
  draining_timeout: typing.Union[int, float] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  gpu: typing.Union[IResolvable, typing.List[ElastigroupGcpGpu]] = None,
  health_check_grace_period: typing.Union[int, float] = None,
  health_check_type: str = None,
  id: str = None,
  instance_name_prefix: str = None,
  instance_types_custom: typing.Union[IResolvable, typing.List[ElastigroupGcpInstanceTypesCustom]] = None,
  instance_types_ondemand: str = None,
  instance_types_preemptible: typing.List[str] = None,
  integration_docker_swarm: ElastigroupGcpIntegrationDockerSwarm = None,
  integration_gke: ElastigroupGcpIntegrationGke = None,
  ip_forwarding: typing.Union[bool, IResolvable] = None,
  labels: typing.Union[IResolvable, typing.List[ElastigroupGcpLabels]] = None,
  max_size: typing.Union[int, float] = None,
  metadata: typing.Union[IResolvable, typing.List[ElastigroupGcpMetadata]] = None,
  min_size: typing.Union[int, float] = None,
  network_interface: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterface]] = None,
  ondemand_count: typing.Union[int, float] = None,
  optimization_windows: typing.List[str] = None,
  preemptible_percentage: typing.Union[int, float] = None,
  provisioning_model: str = None,
  revert_to_preemptible: typing.Union[IResolvable, typing.List[ElastigroupGcpRevertToPreemptible]] = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicy]] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[ElastigroupGcpScheduledTask]] = None,
  service_account: str = None,
  shutdown_script: str = None,
  startup_script: str = None,
  subnets: typing.Union[IResolvable, typing.List[ElastigroupGcpSubnets]] = None,
  tags: typing.List[str] = None,
  unhealthy_duration: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.backendServices">backend_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.gpu">gpu</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]</code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckGracePeriod">health_check_grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckType">health_check_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceNamePrefix">instance_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesCustom">instance_types_custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]</code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesOndemand">instance_types_ondemand</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesPreemptible">instance_types_preemptible</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationDockerSwarm">integration_docker_swarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationGke">integration_gke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ipForwarding">ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ondemandCount">ondemand_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.optimizationWindows">optimization_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#optimization_windows ElastigroupGcp#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioningModel">provisioning_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.revertToPreemptible">revert_to_preemptible</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]</code> | revert_to_preemptible block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.startupScript">startup_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.subnets">subnets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]</code> | subnets block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.unhealthyDuration">unhealthy_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.autoHealing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}.

---

##### `backend_services`<sup>Optional</sup> <a name="backend_services" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.backendServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#backend_services ElastigroupGcp#backend_services}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.disk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#disk ElastigroupGcp#disk}

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.gpu"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#gpu ElastigroupGcp#gpu}

---

##### `health_check_grace_period`<sup>Optional</sup> <a name="health_check_grace_period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckGracePeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}.

---

##### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_name_prefix`<sup>Optional</sup> <a name="instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}.

---

##### `instance_types_custom`<sup>Optional</sup> <a name="instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesCustom"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_custom ElastigroupGcp#instance_types_custom}

---

##### `instance_types_ondemand`<sup>Optional</sup> <a name="instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesOndemand"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}.

---

##### `instance_types_preemptible`<sup>Optional</sup> <a name="instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesPreemptible"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}.

---

##### `integration_docker_swarm`<sup>Optional</sup> <a name="integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationDockerSwarm"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#integration_docker_swarm ElastigroupGcp#integration_docker_swarm}

---

##### `integration_gke`<sup>Optional</sup> <a name="integration_gke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationGke"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#integration_gke ElastigroupGcp#integration_gke}

---

##### `ip_forwarding`<sup>Optional</sup> <a name="ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ipForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#labels ElastigroupGcp#labels}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.metadata"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#metadata ElastigroupGcp#metadata}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#network_interface ElastigroupGcp#network_interface}

---

##### `ondemand_count`<sup>Optional</sup> <a name="ondemand_count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ondemandCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}.

---

##### `optimization_windows`<sup>Optional</sup> <a name="optimization_windows" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.optimizationWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#optimization_windows ElastigroupGcp#optimization_windows}.

---

##### `preemptible_percentage`<sup>Optional</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.preemptiblePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}.

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioningModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}.

---

##### `revert_to_preemptible`<sup>Optional</sup> <a name="revert_to_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.revertToPreemptible"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]

revert_to_preemptible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#revert_to_preemptible ElastigroupGcp#revert_to_preemptible}

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingDownPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scaling_down_policy ElastigroupGcp#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingUpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scaling_up_policy ElastigroupGcp#scaling_up_policy}

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scheduledTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scheduled_task ElastigroupGcp#scheduled_task}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}.

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.shutdownScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}.

---

##### `startup_script`<sup>Optional</sup> <a name="startup_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.startupScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.subnets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]

subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#subnets ElastigroupGcp#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}.

---

##### `unhealthy_duration`<sup>Optional</sup> <a name="unhealthy_duration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.unhealthyDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices">put_backend_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk">put_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu">put_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom">put_instance_types_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm">put_integration_docker_swarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke">put_integration_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putRevertToPreemptible">put_revert_to_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy">put_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy">put_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask">put_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets">put_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAutoHealing">reset_auto_healing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetBackendServices">reset_backend_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetFallbackToOndemand">reset_fallback_to_ondemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetGpu">reset_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckGracePeriod">reset_health_check_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckType">reset_health_check_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceNamePrefix">reset_instance_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesCustom">reset_instance_types_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesOndemand">reset_instance_types_ondemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesPreemptible">reset_instance_types_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationDockerSwarm">reset_integration_docker_swarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationGke">reset_integration_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIpForwarding">reset_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOndemandCount">reset_ondemand_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOptimizationWindows">reset_optimization_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetPreemptiblePercentage">reset_preemptible_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetProvisioningModel">reset_provisioning_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetRevertToPreemptible">reset_revert_to_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingDownPolicy">reset_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingUpPolicy">reset_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScheduledTask">reset_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetShutdownScript">reset_shutdown_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetStartupScript">reset_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetUnhealthyDuration">reset_unhealthy_duration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend_services` <a name="put_backend_services" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices"></a>

```python
def put_backend_services(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]

---

##### `put_disk` <a name="put_disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk"></a>

```python
def put_disk(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]

---

##### `put_gpu` <a name="put_gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu"></a>

```python
def put_gpu(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpGpu]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]

---

##### `put_instance_types_custom` <a name="put_instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom"></a>

```python
def put_instance_types_custom(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpInstanceTypesCustom]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]

---

##### `put_integration_docker_swarm` <a name="put_integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm"></a>

```python
def put_integration_docker_swarm(
  master_host: str,
  master_port: typing.Union[int, float]
) -> None
```

###### `master_host`<sup>Required</sup> <a name="master_host" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm.parameter.masterHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#master_host ElastigroupGcp#master_host}.

---

###### `master_port`<sup>Required</sup> <a name="master_port" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm.parameter.masterPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#master_port ElastigroupGcp#master_port}.

---

##### `put_integration_gke` <a name="put_integration_gke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke"></a>

```python
def put_integration_gke(
  autoscale_cooldown: typing.Union[int, float] = None,
  autoscale_down: ElastigroupGcpIntegrationGkeAutoscaleDown = None,
  autoscale_headroom: ElastigroupGcpIntegrationGkeAutoscaleHeadroom = None,
  autoscale_is_auto_config: typing.Union[bool, IResolvable] = None,
  autoscale_is_enabled: typing.Union[bool, IResolvable] = None,
  autoscale_labels: typing.Union[IResolvable, typing.List[ElastigroupGcpIntegrationGkeAutoscaleLabels]] = None,
  auto_update: typing.Union[bool, IResolvable] = None,
  cluster_id: str = None,
  location: str = None
) -> None
```

###### `autoscale_cooldown`<sup>Optional</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoscaleCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}.

---

###### `autoscale_down`<sup>Optional</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoscaleDown"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_down ElastigroupGcp#autoscale_down}

---

###### `autoscale_headroom`<sup>Optional</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoscaleHeadroom"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_headroom ElastigroupGcp#autoscale_headroom}

---

###### `autoscale_is_auto_config`<sup>Optional</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoscaleIsAutoConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}.

---

###### `autoscale_is_enabled`<sup>Optional</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoscaleIsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}.

---

###### `autoscale_labels`<sup>Optional</sup> <a name="autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoscaleLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]

autoscale_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_labels ElastigroupGcp#autoscale_labels}

---

###### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.autoUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}.

---

###### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#location ElastigroupGcp#location}.

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata"></a>

```python
def put_metadata(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpMetadata]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]

---

##### `put_revert_to_preemptible` <a name="put_revert_to_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putRevertToPreemptible"></a>

```python
def put_revert_to_preemptible(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpRevertToPreemptible]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putRevertToPreemptible.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]

---

##### `put_scaling_down_policy` <a name="put_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy"></a>

```python
def put_scaling_down_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]

---

##### `put_scaling_up_policy` <a name="put_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy"></a>

```python
def put_scaling_up_policy(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]

---

##### `put_scheduled_task` <a name="put_scheduled_task" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask"></a>

```python
def put_scheduled_task(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpScheduledTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]

---

##### `put_subnets` <a name="put_subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets"></a>

```python
def put_subnets(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpSubnets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]

---

##### `reset_auto_healing` <a name="reset_auto_healing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAutoHealing"></a>

```python
def reset_auto_healing() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_backend_services` <a name="reset_backend_services" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetBackendServices"></a>

```python
def reset_backend_services() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk` <a name="reset_disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_fallback_to_ondemand` <a name="reset_fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetFallbackToOndemand"></a>

```python
def reset_fallback_to_ondemand() -> None
```

##### `reset_gpu` <a name="reset_gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetGpu"></a>

```python
def reset_gpu() -> None
```

##### `reset_health_check_grace_period` <a name="reset_health_check_grace_period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckGracePeriod"></a>

```python
def reset_health_check_grace_period() -> None
```

##### `reset_health_check_type` <a name="reset_health_check_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckType"></a>

```python
def reset_health_check_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_name_prefix` <a name="reset_instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceNamePrefix"></a>

```python
def reset_instance_name_prefix() -> None
```

##### `reset_instance_types_custom` <a name="reset_instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesCustom"></a>

```python
def reset_instance_types_custom() -> None
```

##### `reset_instance_types_ondemand` <a name="reset_instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesOndemand"></a>

```python
def reset_instance_types_ondemand() -> None
```

##### `reset_instance_types_preemptible` <a name="reset_instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesPreemptible"></a>

```python
def reset_instance_types_preemptible() -> None
```

##### `reset_integration_docker_swarm` <a name="reset_integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationDockerSwarm"></a>

```python
def reset_integration_docker_swarm() -> None
```

##### `reset_integration_gke` <a name="reset_integration_gke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationGke"></a>

```python
def reset_integration_gke() -> None
```

##### `reset_ip_forwarding` <a name="reset_ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIpForwarding"></a>

```python
def reset_ip_forwarding() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_ondemand_count` <a name="reset_ondemand_count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOndemandCount"></a>

```python
def reset_ondemand_count() -> None
```

##### `reset_optimization_windows` <a name="reset_optimization_windows" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOptimizationWindows"></a>

```python
def reset_optimization_windows() -> None
```

##### `reset_preemptible_percentage` <a name="reset_preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetPreemptiblePercentage"></a>

```python
def reset_preemptible_percentage() -> None
```

##### `reset_provisioning_model` <a name="reset_provisioning_model" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetProvisioningModel"></a>

```python
def reset_provisioning_model() -> None
```

##### `reset_revert_to_preemptible` <a name="reset_revert_to_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetRevertToPreemptible"></a>

```python
def reset_revert_to_preemptible() -> None
```

##### `reset_scaling_down_policy` <a name="reset_scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingDownPolicy"></a>

```python
def reset_scaling_down_policy() -> None
```

##### `reset_scaling_up_policy` <a name="reset_scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingUpPolicy"></a>

```python
def reset_scaling_up_policy() -> None
```

##### `reset_scheduled_task` <a name="reset_scheduled_task" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScheduledTask"></a>

```python
def reset_scheduled_task() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shutdown_script` <a name="reset_shutdown_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetShutdownScript"></a>

```python
def reset_shutdown_script() -> None
```

##### `reset_startup_script` <a name="reset_startup_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetStartupScript"></a>

```python
def reset_startup_script() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_unhealthy_duration` <a name="reset_unhealthy_duration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetUnhealthyDuration"></a>

```python
def reset_unhealthy_duration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElastigroupGcp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElastigroupGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElastigroupGcp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElastigroupGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServices">backend_services</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList">ElastigroupGcpBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList">ElastigroupGcpDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList">ElastigroupGcpGpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustom">instance_types_custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList">ElastigroupGcpInstanceTypesCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarm">integration_docker_swarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference">ElastigroupGcpIntegrationDockerSwarmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGke">integration_gke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference">ElastigroupGcpIntegrationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList">ElastigroupGcpLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList">ElastigroupGcpMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList">ElastigroupGcpNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.revertToPreemptible">revert_to_preemptible</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList">ElastigroupGcpRevertToPreemptibleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicy">scaling_down_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList">ElastigroupGcpScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicy">scaling_up_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList">ElastigroupGcpScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTask">scheduled_task</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList">ElastigroupGcpScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnets">subnets</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList">ElastigroupGcpSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealingInput">auto_healing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServicesInput">backend_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.diskInput">disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemandInput">fallback_to_ondemand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpuInput">gpu_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriodInput">health_check_grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckTypeInput">health_check_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefixInput">instance_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustomInput">instance_types_custom_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemandInput">instance_types_ondemand_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptibleInput">instance_types_preemptible_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarmInput">integration_docker_swarm_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGkeInput">integration_gke_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwardingInput">ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadataInput">metadata_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCountInput">ondemand_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.optimizationWindowsInput">optimization_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentageInput">preemptible_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModelInput">provisioning_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.revertToPreemptibleInput">revert_to_preemptible_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicyInput">scaling_down_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicyInput">scaling_up_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTaskInput">scheduled_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScriptInput">shutdown_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScriptInput">startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnetsInput">subnets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDurationInput">unhealthy_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriod">health_check_grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefix">instance_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemand">instance_types_ondemand</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptible">instance_types_preemptible</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwarding">ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCount">ondemand_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.optimizationWindows">optimization_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScript">startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDuration">unhealthy_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_services`<sup>Required</sup> <a name="backend_services" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServices"></a>

```python
backend_services: ElastigroupGcpBackendServicesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList">ElastigroupGcpBackendServicesList</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.disk"></a>

```python
disk: ElastigroupGcpDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList">ElastigroupGcpDiskList</a>

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpu"></a>

```python
gpu: ElastigroupGcpGpuList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList">ElastigroupGcpGpuList</a>

---

##### `instance_types_custom`<sup>Required</sup> <a name="instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustom"></a>

```python
instance_types_custom: ElastigroupGcpInstanceTypesCustomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList">ElastigroupGcpInstanceTypesCustomList</a>

---

##### `integration_docker_swarm`<sup>Required</sup> <a name="integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarm"></a>

```python
integration_docker_swarm: ElastigroupGcpIntegrationDockerSwarmOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference">ElastigroupGcpIntegrationDockerSwarmOutputReference</a>

---

##### `integration_gke`<sup>Required</sup> <a name="integration_gke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGke"></a>

```python
integration_gke: ElastigroupGcpIntegrationGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference">ElastigroupGcpIntegrationGkeOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labels"></a>

```python
labels: ElastigroupGcpLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList">ElastigroupGcpLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadata"></a>

```python
metadata: ElastigroupGcpMetadataList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList">ElastigroupGcpMetadataList</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterface"></a>

```python
network_interface: ElastigroupGcpNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList">ElastigroupGcpNetworkInterfaceList</a>

---

##### `revert_to_preemptible`<sup>Required</sup> <a name="revert_to_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.revertToPreemptible"></a>

```python
revert_to_preemptible: ElastigroupGcpRevertToPreemptibleList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList">ElastigroupGcpRevertToPreemptibleList</a>

---

##### `scaling_down_policy`<sup>Required</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicy"></a>

```python
scaling_down_policy: ElastigroupGcpScalingDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList">ElastigroupGcpScalingDownPolicyList</a>

---

##### `scaling_up_policy`<sup>Required</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicy"></a>

```python
scaling_up_policy: ElastigroupGcpScalingUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList">ElastigroupGcpScalingUpPolicyList</a>

---

##### `scheduled_task`<sup>Required</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTask"></a>

```python
scheduled_task: ElastigroupGcpScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList">ElastigroupGcpScheduledTaskList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnets"></a>

```python
subnets: ElastigroupGcpSubnetsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList">ElastigroupGcpSubnetsList</a>

---

##### `auto_healing_input`<sup>Optional</sup> <a name="auto_healing_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealingInput"></a>

```python
auto_healing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_services_input`<sup>Optional</sup> <a name="backend_services_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServicesInput"></a>

```python
backend_services_input: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.diskInput"></a>

```python
disk_input: typing.Union[IResolvable, typing.List[ElastigroupGcpDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_ondemand_input`<sup>Optional</sup> <a name="fallback_to_ondemand_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemandInput"></a>

```python
fallback_to_ondemand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gpu_input`<sup>Optional</sup> <a name="gpu_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpuInput"></a>

```python
gpu_input: typing.Union[IResolvable, typing.List[ElastigroupGcpGpu]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]

---

##### `health_check_grace_period_input`<sup>Optional</sup> <a name="health_check_grace_period_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriodInput"></a>

```python
health_check_grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type_input`<sup>Optional</sup> <a name="health_check_type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckTypeInput"></a>

```python
health_check_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_prefix_input`<sup>Optional</sup> <a name="instance_name_prefix_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefixInput"></a>

```python
instance_name_prefix_input: str
```

- *Type:* str

---

##### `instance_types_custom_input`<sup>Optional</sup> <a name="instance_types_custom_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustomInput"></a>

```python
instance_types_custom_input: typing.Union[IResolvable, typing.List[ElastigroupGcpInstanceTypesCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]

---

##### `instance_types_ondemand_input`<sup>Optional</sup> <a name="instance_types_ondemand_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemandInput"></a>

```python
instance_types_ondemand_input: str
```

- *Type:* str

---

##### `instance_types_preemptible_input`<sup>Optional</sup> <a name="instance_types_preemptible_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptibleInput"></a>

```python
instance_types_preemptible_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_docker_swarm_input`<sup>Optional</sup> <a name="integration_docker_swarm_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarmInput"></a>

```python
integration_docker_swarm_input: ElastigroupGcpIntegrationDockerSwarm
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---

##### `integration_gke_input`<sup>Optional</sup> <a name="integration_gke_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGkeInput"></a>

```python
integration_gke_input: ElastigroupGcpIntegrationGke
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---

##### `ip_forwarding_input`<sup>Optional</sup> <a name="ip_forwarding_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwardingInput"></a>

```python
ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ElastigroupGcpLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadataInput"></a>

```python
metadata_input: typing.Union[IResolvable, typing.List[ElastigroupGcpMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]

---

##### `ondemand_count_input`<sup>Optional</sup> <a name="ondemand_count_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCountInput"></a>

```python
ondemand_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `optimization_windows_input`<sup>Optional</sup> <a name="optimization_windows_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.optimizationWindowsInput"></a>

```python
optimization_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible_percentage_input`<sup>Optional</sup> <a name="preemptible_percentage_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentageInput"></a>

```python
preemptible_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_model_input`<sup>Optional</sup> <a name="provisioning_model_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModelInput"></a>

```python
provisioning_model_input: str
```

- *Type:* str

---

##### `revert_to_preemptible_input`<sup>Optional</sup> <a name="revert_to_preemptible_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.revertToPreemptibleInput"></a>

```python
revert_to_preemptible_input: typing.Union[IResolvable, typing.List[ElastigroupGcpRevertToPreemptible]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]

---

##### `scaling_down_policy_input`<sup>Optional</sup> <a name="scaling_down_policy_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicyInput"></a>

```python
scaling_down_policy_input: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]

---

##### `scaling_up_policy_input`<sup>Optional</sup> <a name="scaling_up_policy_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicyInput"></a>

```python
scaling_up_policy_input: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]

---

##### `scheduled_task_input`<sup>Optional</sup> <a name="scheduled_task_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTaskInput"></a>

```python
scheduled_task_input: typing.Union[IResolvable, typing.List[ElastigroupGcpScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `shutdown_script_input`<sup>Optional</sup> <a name="shutdown_script_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScriptInput"></a>

```python
shutdown_script_input: str
```

- *Type:* str

---

##### `startup_script_input`<sup>Optional</sup> <a name="startup_script_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScriptInput"></a>

```python
startup_script_input: str
```

- *Type:* str

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnetsInput"></a>

```python
subnets_input: typing.Union[IResolvable, typing.List[ElastigroupGcpSubnets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unhealthy_duration_input`<sup>Optional</sup> <a name="unhealthy_duration_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDurationInput"></a>

```python
unhealthy_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_healing`<sup>Required</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_to_ondemand`<sup>Required</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_grace_period`<sup>Required</sup> <a name="health_check_grace_period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriod"></a>

```python
health_check_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name_prefix`<sup>Required</sup> <a name="instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefix"></a>

```python
instance_name_prefix: str
```

- *Type:* str

---

##### `instance_types_ondemand`<sup>Required</sup> <a name="instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemand"></a>

```python
instance_types_ondemand: str
```

- *Type:* str

---

##### `instance_types_preemptible`<sup>Required</sup> <a name="instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptible"></a>

```python
instance_types_preemptible: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_forwarding`<sup>Required</sup> <a name="ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwarding"></a>

```python
ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ondemand_count`<sup>Required</sup> <a name="ondemand_count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCount"></a>

```python
ondemand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `optimization_windows`<sup>Required</sup> <a name="optimization_windows" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.optimizationWindows"></a>

```python
optimization_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible_percentage`<sup>Required</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentage"></a>

```python
preemptible_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `shutdown_script`<sup>Required</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

---

##### `startup_script`<sup>Required</sup> <a name="startup_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScript"></a>

```python
startup_script: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unhealthy_duration`<sup>Required</sup> <a name="unhealthy_duration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDuration"></a>

```python
unhealthy_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupGcpBackendServices <a name="ElastigroupGcpBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpBackendServices(
  service_name: str,
  location_type: str = None,
  named_ports: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServicesNamedPorts]] = None,
  scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#service_name ElastigroupGcp#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#location_type ElastigroupGcp#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.namedPorts">named_ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]</code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scheme ElastigroupGcp#scheme}. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#service_name ElastigroupGcp#service_name}.

---

##### `location_type`<sup>Optional</sup> <a name="location_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#location_type ElastigroupGcp#location_type}.

---

##### `named_ports`<sup>Optional</sup> <a name="named_ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.namedPorts"></a>

```python
named_ports: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServicesNamedPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]

named_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#named_ports ElastigroupGcp#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scheme ElastigroupGcp#scheme}.

---

### ElastigroupGcpBackendServicesNamedPorts <a name="ElastigroupGcpBackendServicesNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts(
  name: str,
  ports: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.ports">ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ports ElastigroupGcp#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ports ElastigroupGcp#ports}.

---

### ElastigroupGcpConfig <a name="ElastigroupGcpConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desired_capacity: typing.Union[int, float],
  name: str,
  auto_healing: typing.Union[bool, IResolvable] = None,
  availability_zones: typing.List[str] = None,
  backend_services: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServices]] = None,
  description: str = None,
  disk: typing.Union[IResolvable, typing.List[ElastigroupGcpDisk]] = None,
  draining_timeout: typing.Union[int, float] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  gpu: typing.Union[IResolvable, typing.List[ElastigroupGcpGpu]] = None,
  health_check_grace_period: typing.Union[int, float] = None,
  health_check_type: str = None,
  id: str = None,
  instance_name_prefix: str = None,
  instance_types_custom: typing.Union[IResolvable, typing.List[ElastigroupGcpInstanceTypesCustom]] = None,
  instance_types_ondemand: str = None,
  instance_types_preemptible: typing.List[str] = None,
  integration_docker_swarm: ElastigroupGcpIntegrationDockerSwarm = None,
  integration_gke: ElastigroupGcpIntegrationGke = None,
  ip_forwarding: typing.Union[bool, IResolvable] = None,
  labels: typing.Union[IResolvable, typing.List[ElastigroupGcpLabels]] = None,
  max_size: typing.Union[int, float] = None,
  metadata: typing.Union[IResolvable, typing.List[ElastigroupGcpMetadata]] = None,
  min_size: typing.Union[int, float] = None,
  network_interface: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterface]] = None,
  ondemand_count: typing.Union[int, float] = None,
  optimization_windows: typing.List[str] = None,
  preemptible_percentage: typing.Union[int, float] = None,
  provisioning_model: str = None,
  revert_to_preemptible: typing.Union[IResolvable, typing.List[ElastigroupGcpRevertToPreemptible]] = None,
  scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicy]] = None,
  scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicy]] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[ElastigroupGcpScheduledTask]] = None,
  service_account: str = None,
  shutdown_script: str = None,
  startup_script: str = None,
  subnets: typing.Union[IResolvable, typing.List[ElastigroupGcpSubnets]] = None,
  tags: typing.List[str] = None,
  unhealthy_duration: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.autoHealing">auto_healing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.backendServices">backend_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.disk">disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]</code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.gpu">gpu</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]</code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckGracePeriod">health_check_grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckType">health_check_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceNamePrefix">instance_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesCustom">instance_types_custom</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]</code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesOndemand">instance_types_ondemand</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesPreemptible">instance_types_preemptible</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationDockerSwarm">integration_docker_swarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationGke">integration_gke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ipForwarding">ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ondemandCount">ondemand_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.optimizationWindows">optimization_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#optimization_windows ElastigroupGcp#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.preemptiblePercentage">preemptible_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.revertToPreemptible">revert_to_preemptible</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]</code> | revert_to_preemptible block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingDownPolicy">scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingUpPolicy">scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.shutdownScript">shutdown_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.startupScript">startup_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.subnets">subnets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]</code> | subnets block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.unhealthyDuration">unhealthy_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `auto_healing`<sup>Optional</sup> <a name="auto_healing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.autoHealing"></a>

```python
auto_healing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}.

---

##### `backend_services`<sup>Optional</sup> <a name="backend_services" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.backendServices"></a>

```python
backend_services: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#backend_services ElastigroupGcp#backend_services}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.disk"></a>

```python
disk: typing.Union[IResolvable, typing.List[ElastigroupGcpDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#disk ElastigroupGcp#disk}

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.gpu"></a>

```python
gpu: typing.Union[IResolvable, typing.List[ElastigroupGcpGpu]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#gpu ElastigroupGcp#gpu}

---

##### `health_check_grace_period`<sup>Optional</sup> <a name="health_check_grace_period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckGracePeriod"></a>

```python
health_check_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}.

---

##### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_name_prefix`<sup>Optional</sup> <a name="instance_name_prefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceNamePrefix"></a>

```python
instance_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}.

---

##### `instance_types_custom`<sup>Optional</sup> <a name="instance_types_custom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesCustom"></a>

```python
instance_types_custom: typing.Union[IResolvable, typing.List[ElastigroupGcpInstanceTypesCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_custom ElastigroupGcp#instance_types_custom}

---

##### `instance_types_ondemand`<sup>Optional</sup> <a name="instance_types_ondemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesOndemand"></a>

```python
instance_types_ondemand: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}.

---

##### `instance_types_preemptible`<sup>Optional</sup> <a name="instance_types_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesPreemptible"></a>

```python
instance_types_preemptible: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}.

---

##### `integration_docker_swarm`<sup>Optional</sup> <a name="integration_docker_swarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationDockerSwarm"></a>

```python
integration_docker_swarm: ElastigroupGcpIntegrationDockerSwarm
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#integration_docker_swarm ElastigroupGcp#integration_docker_swarm}

---

##### `integration_gke`<sup>Optional</sup> <a name="integration_gke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationGke"></a>

```python
integration_gke: ElastigroupGcpIntegrationGke
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#integration_gke ElastigroupGcp#integration_gke}

---

##### `ip_forwarding`<sup>Optional</sup> <a name="ip_forwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ipForwarding"></a>

```python
ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ElastigroupGcpLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#labels ElastigroupGcp#labels}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.metadata"></a>

```python
metadata: typing.Union[IResolvable, typing.List[ElastigroupGcpMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#metadata ElastigroupGcp#metadata}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#network_interface ElastigroupGcp#network_interface}

---

##### `ondemand_count`<sup>Optional</sup> <a name="ondemand_count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ondemandCount"></a>

```python
ondemand_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}.

---

##### `optimization_windows`<sup>Optional</sup> <a name="optimization_windows" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.optimizationWindows"></a>

```python
optimization_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#optimization_windows ElastigroupGcp#optimization_windows}.

---

##### `preemptible_percentage`<sup>Optional</sup> <a name="preemptible_percentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.preemptiblePercentage"></a>

```python
preemptible_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}.

---

##### `provisioning_model`<sup>Optional</sup> <a name="provisioning_model" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}.

---

##### `revert_to_preemptible`<sup>Optional</sup> <a name="revert_to_preemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.revertToPreemptible"></a>

```python
revert_to_preemptible: typing.Union[IResolvable, typing.List[ElastigroupGcpRevertToPreemptible]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]

revert_to_preemptible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#revert_to_preemptible ElastigroupGcp#revert_to_preemptible}

---

##### `scaling_down_policy`<sup>Optional</sup> <a name="scaling_down_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingDownPolicy"></a>

```python
scaling_down_policy: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scaling_down_policy ElastigroupGcp#scaling_down_policy}

---

##### `scaling_up_policy`<sup>Optional</sup> <a name="scaling_up_policy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingUpPolicy"></a>

```python
scaling_up_policy: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scaling_up_policy ElastigroupGcp#scaling_up_policy}

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scheduledTask"></a>

```python
scheduled_task: typing.Union[IResolvable, typing.List[ElastigroupGcpScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#scheduled_task ElastigroupGcp#scheduled_task}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}.

---

##### `shutdown_script`<sup>Optional</sup> <a name="shutdown_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.shutdownScript"></a>

```python
shutdown_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}.

---

##### `startup_script`<sup>Optional</sup> <a name="startup_script" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.startupScript"></a>

```python
startup_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.subnets"></a>

```python
subnets: typing.Union[IResolvable, typing.List[ElastigroupGcpSubnets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]

subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#subnets ElastigroupGcp#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}.

---

##### `unhealthy_duration`<sup>Optional</sup> <a name="unhealthy_duration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.unhealthyDuration"></a>

```python
unhealthy_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}.

---

### ElastigroupGcpDisk <a name="ElastigroupGcpDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpDisk(
  auto_delete: typing.Union[bool, IResolvable] = None,
  boot: typing.Union[bool, IResolvable] = None,
  device_name: str = None,
  initialize_params: typing.Union[IResolvable, typing.List[ElastigroupGcpDiskInitializeParams]] = None,
  interface: str = None,
  mode: str = None,
  source: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#boot ElastigroupGcp#boot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#device_name ElastigroupGcp#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.initializeParams">initialize_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]</code> | initialize_params block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.interface">interface</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#interface ElastigroupGcp#interface}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#mode ElastigroupGcp#mode}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `auto_delete`<sup>Optional</sup> <a name="auto_delete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}.

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#boot ElastigroupGcp#boot}.

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#device_name ElastigroupGcp#device_name}.

---

##### `initialize_params`<sup>Optional</sup> <a name="initialize_params" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.initializeParams"></a>

```python
initialize_params: typing.Union[IResolvable, typing.List[ElastigroupGcpDiskInitializeParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#initialize_params ElastigroupGcp#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#interface ElastigroupGcp#interface}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#mode ElastigroupGcp#mode}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpDiskInitializeParams <a name="ElastigroupGcpDiskInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpDiskInitializeParams(
  source_image: str,
  disk_size_gb: str = None,
  disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.sourceImage">source_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source_image ElastigroupGcp#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskType">disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}. |

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source_image ElastigroupGcp#source_image}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}.

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}.

---

### ElastigroupGcpGpu <a name="ElastigroupGcpGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpGpu(
  count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#count ElastigroupGcp#count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#count ElastigroupGcp#count}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpInstanceTypesCustom <a name="ElastigroupGcpInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpInstanceTypesCustom(
  memory_gib: typing.Union[int, float],
  vcpu: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.memoryGib">memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}. |

---

##### `memory_gib`<sup>Required</sup> <a name="memory_gib" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.memoryGib"></a>

```python
memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}.

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}.

---

### ElastigroupGcpIntegrationDockerSwarm <a name="ElastigroupGcpIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm(
  master_host: str,
  master_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterHost">master_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#master_host ElastigroupGcp#master_host}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterPort">master_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#master_port ElastigroupGcp#master_port}. |

---

##### `master_host`<sup>Required</sup> <a name="master_host" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterHost"></a>

```python
master_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#master_host ElastigroupGcp#master_host}.

---

##### `master_port`<sup>Required</sup> <a name="master_port" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterPort"></a>

```python
master_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#master_port ElastigroupGcp#master_port}.

---

### ElastigroupGcpIntegrationGke <a name="ElastigroupGcpIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGke(
  autoscale_cooldown: typing.Union[int, float] = None,
  autoscale_down: ElastigroupGcpIntegrationGkeAutoscaleDown = None,
  autoscale_headroom: ElastigroupGcpIntegrationGkeAutoscaleHeadroom = None,
  autoscale_is_auto_config: typing.Union[bool, IResolvable] = None,
  autoscale_is_enabled: typing.Union[bool, IResolvable] = None,
  autoscale_labels: typing.Union[IResolvable, typing.List[ElastigroupGcpIntegrationGkeAutoscaleLabels]] = None,
  auto_update: typing.Union[bool, IResolvable] = None,
  cluster_id: str = None,
  location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleCooldown">autoscale_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleDown">autoscale_down</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleHeadroom">autoscale_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsAutoConfig">autoscale_is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsEnabled">autoscale_is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleLabels">autoscale_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]</code> | autoscale_labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#location ElastigroupGcp#location}. |

---

##### `autoscale_cooldown`<sup>Optional</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleCooldown"></a>

```python
autoscale_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}.

---

##### `autoscale_down`<sup>Optional</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleDown"></a>

```python
autoscale_down: ElastigroupGcpIntegrationGkeAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_down ElastigroupGcp#autoscale_down}

---

##### `autoscale_headroom`<sup>Optional</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleHeadroom"></a>

```python
autoscale_headroom: ElastigroupGcpIntegrationGkeAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_headroom ElastigroupGcp#autoscale_headroom}

---

##### `autoscale_is_auto_config`<sup>Optional</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsAutoConfig"></a>

```python
autoscale_is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}.

---

##### `autoscale_is_enabled`<sup>Optional</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsEnabled"></a>

```python
autoscale_is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}.

---

##### `autoscale_labels`<sup>Optional</sup> <a name="autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleLabels"></a>

```python
autoscale_labels: typing.Union[IResolvable, typing.List[ElastigroupGcpIntegrationGkeAutoscaleLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]

autoscale_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#autoscale_labels ElastigroupGcp#autoscale_labels}

---

##### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoUpdate"></a>

```python
auto_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#location ElastigroupGcp#location}.

---

### ElastigroupGcpIntegrationGkeAutoscaleDown <a name="ElastigroupGcpIntegrationGkeAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown(
  evaluation_periods: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

### ElastigroupGcpIntegrationGkeAutoscaleHeadroom <a name="ElastigroupGcpIntegrationGkeAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom(
  cpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}. |

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}.

---

##### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}.

---

### ElastigroupGcpIntegrationGkeAutoscaleLabels <a name="ElastigroupGcpIntegrationGkeAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpLabels <a name="ElastigroupGcpLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpMetadata <a name="ElastigroupGcpMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpMetadata(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpNetworkInterface <a name="ElastigroupGcpNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterface(
  network: str,
  access_configs: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAccessConfigs]] = None,
  alias_ip_ranges: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAliasIpRanges]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.network">network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#network ElastigroupGcp#network}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.accessConfigs">access_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.aliasIpRanges">alias_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]</code> | alias_ip_ranges block. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.network"></a>

```python
network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#network ElastigroupGcp#network}.

---

##### `access_configs`<sup>Optional</sup> <a name="access_configs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.accessConfigs"></a>

```python
access_configs: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#access_configs ElastigroupGcp#access_configs}

---

##### `alias_ip_ranges`<sup>Optional</sup> <a name="alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.aliasIpRanges"></a>

```python
alias_ip_ranges: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#alias_ip_ranges ElastigroupGcp#alias_ip_ranges}

---

### ElastigroupGcpNetworkInterfaceAccessConfigs <a name="ElastigroupGcpNetworkInterfaceAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpNetworkInterfaceAliasIpRanges <a name="ElastigroupGcpNetworkInterfaceAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges(
  ip_cidr_range: str,
  subnetwork_range_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}. |

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}.

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}.

---

### ElastigroupGcpRevertToPreemptible <a name="ElastigroupGcpRevertToPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpRevertToPreemptible(
  perform_at: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible.property.performAt">perform_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#perform_at ElastigroupGcp#perform_at}. |

---

##### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible.property.performAt"></a>

```python
perform_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#perform_at ElastigroupGcp#perform_at}.

---

### ElastigroupGcpScalingDownPolicy <a name="ElastigroupGcpScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingDownPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: typing.Union[int, float] = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicyDimensions]] = None,
  evaluation_periods: typing.Union[int, float] = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  source: str = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}.

---

### ElastigroupGcpScalingDownPolicyDimensions <a name="ElastigroupGcpScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpScalingUpPolicy <a name="ElastigroupGcpScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingUpPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: typing.Union[int, float] = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicyDimensions]] = None,
  evaluation_periods: typing.Union[int, float] = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  source: str = None,
  statistic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}.

---

### ElastigroupGcpScalingUpPolicyDimensions <a name="ElastigroupGcpScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpScheduledTask <a name="ElastigroupGcpScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScheduledTask(
  task_type: str,
  cron_expression: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  max_capacity: str = None,
  min_capacity: str = None,
  target_capacity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#task_type ElastigroupGcp#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.maxCapacity">max_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.minCapacity">min_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.targetCapacity">target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}. |

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#task_type ElastigroupGcp#task_type}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.maxCapacity"></a>

```python
max_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}.

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.minCapacity"></a>

```python
min_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}.

---

##### `target_capacity`<sup>Optional</sup> <a name="target_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.targetCapacity"></a>

```python
target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}.

---

### ElastigroupGcpSubnets <a name="ElastigroupGcpSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpSubnets(
  region: str,
  subnet_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#region ElastigroupGcp#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.subnetNames">subnet_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#region ElastigroupGcp#region}.

---

##### `subnet_names`<sup>Required</sup> <a name="subnet_names" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.subnetNames"></a>

```python
subnet_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupGcpBackendServicesList <a name="ElastigroupGcpBackendServicesList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpBackendServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpBackendServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]]

---


### ElastigroupGcpBackendServicesNamedPortsList <a name="ElastigroupGcpBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpBackendServicesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServicesNamedPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]

---


### ElastigroupGcpBackendServicesNamedPortsOutputReference <a name="ElastigroupGcpBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpBackendServicesNamedPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]

---


### ElastigroupGcpBackendServicesOutputReference <a name="ElastigroupGcpBackendServicesOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpBackendServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts">put_named_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetLocationType">reset_location_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetNamedPorts">reset_named_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_named_ports` <a name="put_named_ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts"></a>

```python
def put_named_ports(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServicesNamedPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]

---

##### `reset_location_type` <a name="reset_location_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetLocationType"></a>

```python
def reset_location_type() -> None
```

##### `reset_named_ports` <a name="reset_named_ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetNamedPorts"></a>

```python
def reset_named_ports() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPorts">named_ports</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList">ElastigroupGcpBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationTypeInput">location_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPortsInput">named_ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `named_ports`<sup>Required</sup> <a name="named_ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPorts"></a>

```python
named_ports: ElastigroupGcpBackendServicesNamedPortsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList">ElastigroupGcpBackendServicesNamedPortsList</a>

---

##### `location_type_input`<sup>Optional</sup> <a name="location_type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationTypeInput"></a>

```python
location_type_input: str
```

- *Type:* str

---

##### `named_ports_input`<sup>Optional</sup> <a name="named_ports_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPortsInput"></a>

```python
named_ports_input: typing.Union[IResolvable, typing.List[ElastigroupGcpBackendServicesNamedPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>]]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpBackendServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>]

---


### ElastigroupGcpDiskInitializeParamsList <a name="ElastigroupGcpDiskInitializeParamsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpDiskInitializeParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpDiskInitializeParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpDiskInitializeParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]

---


### ElastigroupGcpDiskInitializeParamsOutputReference <a name="ElastigroupGcpDiskInitializeParamsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImageInput">source_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `source_image_input`<sup>Optional</sup> <a name="source_image_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImageInput"></a>

```python
source_image_input: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpDiskInitializeParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]

---


### ElastigroupGcpDiskList <a name="ElastigroupGcpDiskList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]]

---


### ElastigroupGcpDiskOutputReference <a name="ElastigroupGcpDiskOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams">put_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetAutoDelete">reset_auto_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetBoot">reset_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInitializeParams">reset_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initialize_params` <a name="put_initialize_params" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams"></a>

```python
def put_initialize_params(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpDiskInitializeParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]

---

##### `reset_auto_delete` <a name="reset_auto_delete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetAutoDelete"></a>

```python
def reset_auto_delete() -> None
```

##### `reset_boot` <a name="reset_boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetBoot"></a>

```python
def reset_boot() -> None
```

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_initialize_params` <a name="reset_initialize_params" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInitializeParams"></a>

```python
def reset_initialize_params() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList">ElastigroupGcpDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDeleteInput">auto_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.bootInput">boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParamsInput">initialize_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.boot">boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initialize_params`<sup>Required</sup> <a name="initialize_params" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParams"></a>

```python
initialize_params: ElastigroupGcpDiskInitializeParamsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList">ElastigroupGcpDiskInitializeParamsList</a>

---

##### `auto_delete_input`<sup>Optional</sup> <a name="auto_delete_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDeleteInput"></a>

```python
auto_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot_input`<sup>Optional</sup> <a name="boot_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.bootInput"></a>

```python
boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `initialize_params_input`<sup>Optional</sup> <a name="initialize_params_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParamsInput"></a>

```python
initialize_params_input: typing.Union[IResolvable, typing.List[ElastigroupGcpDiskInitializeParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>]]

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.boot"></a>

```python
boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>]

---


### ElastigroupGcpGpuList <a name="ElastigroupGcpGpuList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpGpuList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpGpuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpGpu]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]]

---


### ElastigroupGcpGpuOutputReference <a name="ElastigroupGcpGpuOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpGpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpGpu]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>]

---


### ElastigroupGcpInstanceTypesCustomList <a name="ElastigroupGcpInstanceTypesCustomList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpInstanceTypesCustomList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpInstanceTypesCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpInstanceTypesCustom]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]]

---


### ElastigroupGcpInstanceTypesCustomOutputReference <a name="ElastigroupGcpInstanceTypesCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGibInput">memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpuInput">vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGib">memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_gib_input`<sup>Optional</sup> <a name="memory_gib_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGibInput"></a>

```python
memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpu_input`<sup>Optional</sup> <a name="vcpu_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpuInput"></a>

```python
vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gib`<sup>Required</sup> <a name="memory_gib" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGib"></a>

```python
memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpInstanceTypesCustom]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>]

---


### ElastigroupGcpIntegrationDockerSwarmOutputReference <a name="ElastigroupGcpIntegrationDockerSwarmOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHostInput">master_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPortInput">master_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHost">master_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPort">master_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_host_input`<sup>Optional</sup> <a name="master_host_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHostInput"></a>

```python
master_host_input: str
```

- *Type:* str

---

##### `master_port_input`<sup>Optional</sup> <a name="master_port_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPortInput"></a>

```python
master_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_host`<sup>Required</sup> <a name="master_host" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHost"></a>

```python
master_host: str
```

- *Type:* str

---

##### `master_port`<sup>Required</sup> <a name="master_port" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPort"></a>

```python
master_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGcpIntegrationDockerSwarm
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGcpIntegrationGkeAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits">reset_num_of_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```

##### `reset_num_of_units` <a name="reset_num_of_units" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```python
def reset_num_of_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGcpIntegrationGkeAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleLabelsList <a name="ElastigroupGcpIntegrationGkeAutoscaleLabelsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpIntegrationGkeAutoscaleLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]

---


### ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpIntegrationGkeAutoscaleLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]

---


### ElastigroupGcpIntegrationGkeOutputReference <a name="ElastigroupGcpIntegrationGkeOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown">put_autoscale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom">put_autoscale_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels">put_autoscale_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleCooldown">reset_autoscale_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleDown">reset_autoscale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleHeadroom">reset_autoscale_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig">reset_autoscale_is_auto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsEnabled">reset_autoscale_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleLabels">reset_autoscale_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoUpdate">reset_auto_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale_down` <a name="put_autoscale_down" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown"></a>

```python
def put_autoscale_down(
  evaluation_periods: typing.Union[int, float] = None
) -> None
```

###### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `put_autoscale_headroom` <a name="put_autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom"></a>

```python
def put_autoscale_headroom(
  cpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
) -> None
```

###### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.cpuPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}.

---

###### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.memoryPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}.

---

###### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.numOfUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}.

---

##### `put_autoscale_labels` <a name="put_autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels"></a>

```python
def put_autoscale_labels(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpIntegrationGkeAutoscaleLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]

---

##### `reset_autoscale_cooldown` <a name="reset_autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleCooldown"></a>

```python
def reset_autoscale_cooldown() -> None
```

##### `reset_autoscale_down` <a name="reset_autoscale_down" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleDown"></a>

```python
def reset_autoscale_down() -> None
```

##### `reset_autoscale_headroom` <a name="reset_autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleHeadroom"></a>

```python
def reset_autoscale_headroom() -> None
```

##### `reset_autoscale_is_auto_config` <a name="reset_autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig"></a>

```python
def reset_autoscale_is_auto_config() -> None
```

##### `reset_autoscale_is_enabled` <a name="reset_autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsEnabled"></a>

```python
def reset_autoscale_is_enabled() -> None
```

##### `reset_autoscale_labels` <a name="reset_autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleLabels"></a>

```python
def reset_autoscale_labels() -> None
```

##### `reset_auto_update` <a name="reset_auto_update" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoUpdate"></a>

```python
def reset_auto_update() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDown">autoscale_down</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference">ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroom">autoscale_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabels">autoscale_labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList">ElastigroupGcpIntegrationGkeAutoscaleLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldownInput">autoscale_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDownInput">autoscale_down_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroomInput">autoscale_headroom_input</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput">autoscale_is_auto_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabledInput">autoscale_is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabelsInput">autoscale_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdateInput">auto_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldown">autoscale_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfig">autoscale_is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabled">autoscale_is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale_down`<sup>Required</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDown"></a>

```python
autoscale_down: ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference">ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference</a>

---

##### `autoscale_headroom`<sup>Required</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroom"></a>

```python
autoscale_headroom: ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference</a>

---

##### `autoscale_labels`<sup>Required</sup> <a name="autoscale_labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabels"></a>

```python
autoscale_labels: ElastigroupGcpIntegrationGkeAutoscaleLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList">ElastigroupGcpIntegrationGkeAutoscaleLabelsList</a>

---

##### `autoscale_cooldown_input`<sup>Optional</sup> <a name="autoscale_cooldown_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldownInput"></a>

```python
autoscale_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_down_input`<sup>Optional</sup> <a name="autoscale_down_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDownInput"></a>

```python
autoscale_down_input: ElastigroupGcpIntegrationGkeAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---

##### `autoscale_headroom_input`<sup>Optional</sup> <a name="autoscale_headroom_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroomInput"></a>

```python
autoscale_headroom_input: ElastigroupGcpIntegrationGkeAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---

##### `autoscale_is_auto_config_input`<sup>Optional</sup> <a name="autoscale_is_auto_config_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput"></a>

```python
autoscale_is_auto_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_is_enabled_input`<sup>Optional</sup> <a name="autoscale_is_enabled_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabledInput"></a>

```python
autoscale_is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_labels_input`<sup>Optional</sup> <a name="autoscale_labels_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabelsInput"></a>

```python
autoscale_labels_input: typing.Union[IResolvable, typing.List[ElastigroupGcpIntegrationGkeAutoscaleLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>]]

---

##### `auto_update_input`<sup>Optional</sup> <a name="auto_update_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdateInput"></a>

```python
auto_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `autoscale_cooldown`<sup>Required</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldown"></a>

```python
autoscale_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_is_auto_config`<sup>Required</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfig"></a>

```python
autoscale_is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_is_enabled`<sup>Required</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabled"></a>

```python
autoscale_is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdate"></a>

```python
auto_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.internalValue"></a>

```python
internal_value: ElastigroupGcpIntegrationGke
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---


### ElastigroupGcpLabelsList <a name="ElastigroupGcpLabelsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]]

---


### ElastigroupGcpLabelsOutputReference <a name="ElastigroupGcpLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>]

---


### ElastigroupGcpMetadataList <a name="ElastigroupGcpMetadataList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]]

---


### ElastigroupGcpMetadataOutputReference <a name="ElastigroupGcpMetadataOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpMetadata]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>]

---


### ElastigroupGcpNetworkInterfaceAccessConfigsList <a name="ElastigroupGcpNetworkInterfaceAccessConfigsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]

---


### ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference <a name="ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpNetworkInterfaceAccessConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]

---


### ElastigroupGcpNetworkInterfaceAliasIpRangesList <a name="ElastigroupGcpNetworkInterfaceAliasIpRangesList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]

---


### ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference <a name="ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetwork_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `subnetwork_range_name_input`<sup>Optional</sup> <a name="subnetwork_range_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```python
subnetwork_range_name_input: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpNetworkInterfaceAliasIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]

---


### ElastigroupGcpNetworkInterfaceList <a name="ElastigroupGcpNetworkInterfaceList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]]

---


### ElastigroupGcpNetworkInterfaceOutputReference <a name="ElastigroupGcpNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs">put_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges">put_alias_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAccessConfigs">reset_access_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAliasIpRanges">reset_alias_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_configs` <a name="put_access_configs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs"></a>

```python
def put_access_configs(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAccessConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]

---

##### `put_alias_ip_ranges` <a name="put_alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges"></a>

```python
def put_alias_ip_ranges(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAliasIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]

---

##### `reset_access_configs` <a name="reset_access_configs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAccessConfigs"></a>

```python
def reset_access_configs() -> None
```

##### `reset_alias_ip_ranges` <a name="reset_alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAliasIpRanges"></a>

```python
def reset_alias_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigs">access_configs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList">ElastigroupGcpNetworkInterfaceAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRanges">alias_ip_ranges</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList">ElastigroupGcpNetworkInterfaceAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigsInput">access_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRangesInput">alias_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_configs`<sup>Required</sup> <a name="access_configs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigs"></a>

```python
access_configs: ElastigroupGcpNetworkInterfaceAccessConfigsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList">ElastigroupGcpNetworkInterfaceAccessConfigsList</a>

---

##### `alias_ip_ranges`<sup>Required</sup> <a name="alias_ip_ranges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRanges"></a>

```python
alias_ip_ranges: ElastigroupGcpNetworkInterfaceAliasIpRangesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList">ElastigroupGcpNetworkInterfaceAliasIpRangesList</a>

---

##### `access_configs_input`<sup>Optional</sup> <a name="access_configs_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigsInput"></a>

```python
access_configs_input: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAccessConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>]]

---

##### `alias_ip_ranges_input`<sup>Optional</sup> <a name="alias_ip_ranges_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRangesInput"></a>

```python
alias_ip_ranges_input: typing.Union[IResolvable, typing.List[ElastigroupGcpNetworkInterfaceAliasIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>]]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>]

---


### ElastigroupGcpRevertToPreemptibleList <a name="ElastigroupGcpRevertToPreemptibleList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpRevertToPreemptibleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpRevertToPreemptibleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpRevertToPreemptible]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]]

---


### ElastigroupGcpRevertToPreemptibleOutputReference <a name="ElastigroupGcpRevertToPreemptibleOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.performAtInput">perform_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.performAt">perform_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `perform_at_input`<sup>Optional</sup> <a name="perform_at_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.performAtInput"></a>

```python
perform_at_input: str
```

- *Type:* str

---

##### `perform_at`<sup>Required</sup> <a name="perform_at" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.performAt"></a>

```python
perform_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptibleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpRevertToPreemptible]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpRevertToPreemptible">ElastigroupGcpRevertToPreemptible</a>]

---


### ElastigroupGcpScalingDownPolicyDimensionsList <a name="ElastigroupGcpScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpScalingDownPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]

---


### ElastigroupGcpScalingDownPolicyDimensionsOutputReference <a name="ElastigroupGcpScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpScalingDownPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]

---


### ElastigroupGcpScalingDownPolicyList <a name="ElastigroupGcpScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingDownPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]]

---


### ElastigroupGcpScalingDownPolicyOutputReference <a name="ElastigroupGcpScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList">ElastigroupGcpScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupGcpScalingDownPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList">ElastigroupGcpScalingDownPolicyDimensionsList</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingDownPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpScalingDownPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>]

---


### ElastigroupGcpScalingUpPolicyDimensionsList <a name="ElastigroupGcpScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpScalingUpPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]

---


### ElastigroupGcpScalingUpPolicyDimensionsOutputReference <a name="ElastigroupGcpScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpScalingUpPolicyDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]

---


### ElastigroupGcpScalingUpPolicyList <a name="ElastigroupGcpScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingUpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]]

---


### ElastigroupGcpScalingUpPolicyOutputReference <a name="ElastigroupGcpScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicyDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList">ElastigroupGcpScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensions"></a>

```python
dimensions: ElastigroupGcpScalingUpPolicyDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList">ElastigroupGcpScalingUpPolicyDimensionsList</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[ElastigroupGcpScalingUpPolicyDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>]]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustment"></a>

```python
adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpScalingUpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>]

---


### ElastigroupGcpScheduledTaskList <a name="ElastigroupGcpScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScheduledTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]]

---


### ElastigroupGcpScheduledTaskOutputReference <a name="ElastigroupGcpScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetTargetCapacity">reset_target_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```

##### `reset_target_capacity` <a name="reset_target_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetTargetCapacity"></a>

```python
def reset_target_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacityInput">target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacity">max_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacity">min_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacity">target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: str
```

- *Type:* str

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: str
```

- *Type:* str

---

##### `target_capacity_input`<sup>Optional</sup> <a name="target_capacity_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacityInput"></a>

```python
target_capacity_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacity"></a>

```python
max_capacity: str
```

- *Type:* str

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacity"></a>

```python
min_capacity: str
```

- *Type:* str

---

##### `target_capacity`<sup>Required</sup> <a name="target_capacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacity"></a>

```python
target_capacity: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpScheduledTask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>]

---


### ElastigroupGcpSubnetsList <a name="ElastigroupGcpSubnetsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElastigroupGcpSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElastigroupGcpSubnets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]]

---


### ElastigroupGcpSubnetsOutputReference <a name="ElastigroupGcpSubnetsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import elastigroup_gcp

elastigroupGcp.ElastigroupGcpSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNamesInput">subnet_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNames">subnet_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_names_input`<sup>Optional</sup> <a name="subnet_names_input" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNamesInput"></a>

```python
subnet_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnet_names`<sup>Required</sup> <a name="subnet_names" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNames"></a>

```python
subnet_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElastigroupGcpSubnets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>]

---



